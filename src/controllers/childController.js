import { Child } from '../models/Child.js';

// 获取所有孩子数据（返回对象格式 { dabao: ..., erbao: ... }）
export async function getAllChildren(req, res) {
  try {
    const list = await Child.find().lean();
    const map = {};
    for (const item of list) {
      map[item.id] = item;
    }
    return res.json({ success: true, data: map });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}

// 获取单个孩子数据
export async function getChildById(req, res) {
  try {
    const { id } = req.params;
    const child = await Child.findOne({ id }).lean();
    if (!child) {
      return res.status(404).json({ success: false, message: `未找到 ID 为 ${id} 的孩子档案` });
    }
    return res.json({ success: true, data: child });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}

// 全量保存/同步单个孩子数据
export async function updateChild(req, res) {
  try {
    const { id } = req.params;
    const payload = req.body;
    delete payload._id; // 防止主键冲突

    const updated = await Child.findOneAndUpdate(
      { id },
      { $set: payload },
      { new: true, upsert: true }
    );
    return res.json({ success: true, data: updated });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}

// 批量全量同步（与前端 LocalStorage 整体对齐）
export async function syncAll(req, res) {
  try {
    const dataMap = req.body; // { dabao: {...}, erbao: {...} }
    const results = {};

    for (const [id, childData] of Object.entries(dataMap)) {
      const copy = { ...childData };
      delete copy._id;
      const updated = await Child.findOneAndUpdate(
        { id },
        { $set: copy },
        { new: true, upsert: true }
      );
      results[id] = updated;
    }

    return res.json({ success: true, message: '全量同步成功', data: results });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}

// 孩子打卡/取消打卡任务
export async function toggleTask(req, res) {
  try {
    const { id, taskId } = req.params;
    const child = await Child.findOne({ id });
    if (!child) return res.status(404).json({ success: false, message: '孩子档案不存在' });

    let targetTask = null;
    for (const subj of child.subjects) {
      const t = subj.tasks.find(item => item.id === taskId);
      if (t) {
        targetTask = t;
        break;
      }
    }

    if (!targetTask) {
      return res.status(404).json({ success: false, message: '未找到对应任务' });
    }

    targetTask.completed = !targetTask.completed;
    if (!targetTask.completed) {
      // 取消完成时，重置家长核验状态
      targetTask.verified = false;
      targetTask.verifiedTime = null;
    }

    await child.save();
    return res.json({ success: true, data: child });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}

// 家长核验单个任务
export async function verifyTask(req, res) {
  try {
    const { id, taskId } = req.params;
    const child = await Child.findOne({ id });
    if (!child) return res.status(404).json({ success: false, message: '孩子档案不存在' });

    let targetTask = null;
    for (const subj of child.subjects) {
      const t = subj.tasks.find(item => item.id === taskId);
      if (t) {
        targetTask = t;
        break;
      }
    }

    if (!targetTask) {
      return res.status(404).json({ success: false, message: '未找到对应任务' });
    }

    if (!targetTask.verified) {
      targetTask.verified = true;
      const now = new Date();
      targetTask.verifiedTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      
      // 增加金币与经验
      const earnedCoins = targetTask.coins || 5;
      const earnedXP = targetTask.xp || 10;
      child.coins += earnedCoins;
      child.totalCoins += earnedCoins;
      child.todayEnergyXP += earnedXP;
      child.stampsCount += 1;
      if (child.bigGoal) {
        child.bigGoal.currentCoins = child.coins;
      }
    }

    await child.save();
    return res.json({ success: true, data: child });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}

// 家长 8:30 一键批量全科核验
export async function verifyAll(req, res) {
  try {
    const { id } = req.params;
    const child = await Child.findOne({ id });
    if (!child) return res.status(404).json({ success: false, message: '孩子档案不存在' });

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    let addedCoins = 0;
    let addedXP = 0;
    let addedStamps = 0;

    for (const subj of child.subjects) {
      for (const t of subj.tasks) {
        if (t.completed && !t.verified) {
          t.verified = true;
          t.verifiedTime = timeStr;
          addedCoins += t.coins || 5;
          addedXP += t.xp || 10;
          addedStamps += 1;
        }
      }
    }

    child.coins += addedCoins;
    child.totalCoins += addedCoins;
    child.todayEnergyXP += addedXP;
    child.stampsCount += addedStamps;
    if (child.bigGoal) {
      child.bigGoal.currentCoins = child.coins;
    }

    await child.save();
    return res.json({
      success: true,
      data: child,
      summary: { addedCoins, addedXP, addedStamps }
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}

// 兑换心愿商城好礼
export async function redeemReward(req, res) {
  try {
    const { id } = req.params;
    const { rewardId } = req.body;

    const child = await Child.findOne({ id });
    if (!child) return res.status(404).json({ success: false, message: '孩子档案不存在' });

    const reward = child.rewards.find(r => r.id === rewardId);
    if (!reward) return res.status(404).json({ success: false, message: '未找到该心愿好礼' });

    if (child.coins < reward.cost) {
      return res.status(400).json({ success: false, message: '金币余额不足' });
    }

    if (!reward.unlimited && reward.stock <= 0) {
      return res.status(400).json({ success: false, message: '库存不足' });
    }

    // 扣除金币与库存
    child.coins -= reward.cost;
    if (child.bigGoal) {
      child.bigGoal.currentCoins = child.coins;
    }
    if (!reward.unlimited) {
      reward.stock -= 1;
    }

    // 加入兑换手账
    const ledgerItem = {
      id: `rl_${Date.now()}`,
      title: reward.title,
      icon: reward.icon || '🎁',
      cost: reward.cost,
      time: '刚刚兑换 · 消耗 ' + reward.cost + ' 🪙',
      status: 'ready_verify',
      statusText: '待核验'
    };
    child.redeemedLedger.unshift(ledgerItem);

    await child.save();
    return res.json({ success: true, data: child, ledgerItem });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}

// 奖励/扣除金币
export async function adjustCoins(req, res) {
  try {
    const { id } = req.params;
    const { amount, reason } = req.body; // amount 可正可负

    const child = await Child.findOne({ id });
    if (!child) return res.status(404).json({ success: false, message: '孩子档案不存在' });

    child.coins = Math.max(0, child.coins + (Number(amount) || 0));
    if (amount > 0) {
      child.totalCoins += Number(amount);
    }
    if (child.bigGoal) {
      child.bigGoal.currentCoins = child.coins;
    }

    await child.save();
    return res.json({ success: true, data: child });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}
