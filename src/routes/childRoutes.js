import express from 'express';
import {
  getAllChildren,
  getChildById,
  updateChild,
  syncAll,
  toggleTask,
  verifyTask,
  verifyAll,
  redeemReward,
  adjustCoins
} from '../controllers/childController.js';

const router = express.Router();

// 批量同步与获取
router.get('/', getAllChildren);
router.post('/sync-all', syncAll);

// 单个孩子操作
router.get('/:id', getChildById);
router.put('/:id', updateChild);

// 任务打卡与核验
router.post('/:id/tasks/:taskId/toggle', toggleTask);
router.post('/:id/tasks/:taskId/verify', verifyTask);
router.post('/:id/verify-all', verifyAll);

// 奖励兑换与金币调整
router.post('/:id/rewards/redeem', redeemReward);
router.post('/:id/coins/adjust', adjustCoins);

export default router;
