export const initialChildrenData = {
  dabao: {
    id: "dabao",
    name: "大宝",
    avatar: "🦁",
    level: 6,
    grade: "六年级 · 知识探险家",
    coins: 120,
    totalCoins: 1480,
    todayEnergyXP: 0,
    lastActiveDate: new Date().toISOString().slice(0, 10),
    streakDays: 19,
    maxStreak: 28,
    completionRate: 92,
    completedQuestsCount: 46,
    totalWeeklyQuestsCount: 50,
    stampsCount: 286,
    passedRate: 96.4,
    bigGoal: {
      title: "乐高机械组 · 环球影城一日游",
      period: "春季学期",
      note: "爸爸妈妈已签署心愿契约，达成后本月即刻启程！",
      targetCoins: 300,
      currentCoins: 120,
      image: "🏰"
    },
    subjects: [
      {
        id: "chinese",
        name: "语文关卡 · 汉字与文学大营",
        icon: "📜",
        desc: "字斟句酌，笔墨留香，预估用时：90 分钟",
        tasks: [
          {
            id: "c1",
            title: "抄写本 (古诗/生字)",
            type: "home",
            requirement: "严格按固定格式抄写，看顿笔与间架结构",
            estimatedMinutes: 15,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 15,
            coins: 5
          },
          {
            id: "c2",
            title: "练习册 (阅读理解等)",
            type: "school",
            requirement: "课后阅读理解，主观题完整作答禁留白",
            estimatedMinutes: 20,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 20,
            coins: 5
          },
          {
            id: "c3",
            title: "选练 (学校专用册)",
            type: "home",
            requirement: "学校专用专项册，解题规范",
            estimatedMinutes: 15,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 15,
            coins: 5
          },
          {
            id: "c4",
            title: "练字本 A / B",
            type: "school",
            requirement: "书法写字本，看顿笔结构，潦草重写",
            estimatedMinutes: 10,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 10,
            coins: 3
          },
          {
            id: "c5",
            title: "默写本 (订正+新词)",
            type: "home",
            requirement: "昨日错词红笔更改 + 今日新词默写",
            estimatedMinutes: 15,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 15,
            coins: 5
          },
          {
            id: "c6",
            title: "课文朗读",
            type: "home",
            requirement: "大声朗读新课文 2 遍，声音洪亮顺畅",
            estimatedMinutes: 10,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 10,
            coins: 3
          },
          {
            id: "c7",
            title: "作文 / 试卷 (机动)",
            type: "home",
            requirement: "作文保字数；试卷订正见红笔，新卷闭卷",
            estimatedMinutes: 30,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 30,
            coins: 10
          }
        ]
      },
      {
        id: "math",
        name: "数学关卡 · 逻辑运算迷宫",
        icon: "📐",
        desc: "逻辑清晰，攻克算理，预估用时：60 分钟",
        tasks: [
          {
            id: "m1",
            title: "练习册 (当天题型)",
            type: "school",
            requirement: "当天新课练习，卡壳题写明卡点放2层",
            estimatedMinutes: 25,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 25,
            coins: 8
          },
          {
            id: "m2",
            title: "选练 (学校专门册)",
            type: "home",
            requirement: "学校思维题，草稿步骤清晰，禁猜答案",
            estimatedMinutes: 20,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 20,
            coins: 8
          },
          {
            id: "m3",
            title: "试卷订正 (机动)",
            type: "home",
            requirement: "错题红笔分析错因重算，备家长签字",
            estimatedMinutes: 15,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 15,
            coins: 5
          }
        ]
      },
      {
        id: "english",
        name: "英语关卡 · 环球语言航海",
        icon: "🧭",
        desc: "听说读写，发掘世界，预估用时：60 分钟",
        tasks: [
          {
            id: "e1",
            title: "抄写本 (单词/句型)",
            type: "home",
            requirement: "四线三格固定格式，单词/词组/句子规范",
            estimatedMinutes: 15,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 15,
            coins: 5
          },
          {
            id: "e2",
            title: "练习册 (配书本)",
            type: "school",
            requirement: "课本配套练习，核对语法填空与词形",
            estimatedMinutes: 15,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 15,
            coins: 5
          },
          {
            id: "e3",
            title: "选练 (学校专用册)",
            type: "home",
            requirement: "专用拔高练习册，句型转换与完形",
            estimatedMinutes: 15,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 15,
            coins: 5
          },
          {
            id: "e4",
            title: "默写本 (订正+新词)",
            type: "home",
            requirement: "错词 1 改 3 遍，今日新课词汇默写",
            estimatedMinutes: 15,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 15,
            coins: 5
          },
          {
            id: "e5",
            title: "听力 / 课文朗读",
            type: "home",
            requirement: "跟读音频听力，每周长课文分段背诵",
            estimatedMinutes: 15,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 15,
            coins: 5
          }
        ]
      },
      {
        id: "general",
        name: "综合小四门 · 智慧探索馆",
        icon: "🌍",
        desc: "探究万物，格物致知，预估用时：15 分钟",
        tasks: [
          {
            id: "g1",
            title: "地理 / 道法练习册",
            type: "school",
            requirement: "填图题准确，大题结合课本填空",
            estimatedMinutes: 15,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 15,
            coins: 5
          }
        ]
      },
      {
        id: "extra",
        name: "课外拓展 · 自由探险家",
        icon: "🚀",
        desc: "博览群书，持之以恒，预估用时：30 分钟",
        tasks: [
          {
            id: "x1",
            title: "多邻国语言打卡",
            type: "home",
            requirement: "完成今日任务，屏幕保留连胜绿勾界面",
            estimatedMinutes: 20,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 20,
            coins: 8
          }
        ]
      }
    ],
    rewards: [
      {
        id: "r1",
        title: "周五免写一项机动作业特权卡",
        tag: "超高人气",
        category: "privilege",
        icon: "🎮",
        cost: 80,
        desc: "需与当日基础知识复习结合使用，经家长确认通过生效。",
        stock: 2,
        unlimited: false,
        statusText: "余额充足可兑换 剩余库存：2张"
      },
      {
        id: "r2",
        title: "多玩30分钟 Switch / 乐高自由时间",
        tag: "今日即开即用",
        category: "game",
        icon: "⏰",
        cost: 50,
        desc: "周末或作业全部核验完成后自由兑换，享受专注的畅玩时刻！",
        stock: 5,
        unlimited: false,
        statusText: "余额充足可兑换 本周已兑：1次"
      },
      {
        id: "r3",
        title: "周末哈根达斯冰淇淋球 / 奶茶自选券",
        tag: "甜蜜治愈",
        category: "food",
        icon: "🍦",
        cost: 40,
        desc: "周六或周日下午出游时兑现，任选百搭口味，甜蜜犒劳！",
        stock: 999,
        unlimited: true,
        statusText: "余额充足可兑换 无限量供应"
      },
      {
        id: "r4",
        title: "周末家庭影院选片权 + 爆米花套餐",
        tag: "家庭狂欢",
        category: "game",
        icon: "🎬",
        cost: 60,
        desc: "周五或周六晚全家观影、你拥有绝对最高决定权与特别零食！",
        stock: 1,
        unlimited: false,
        statusText: "余额充足可兑换 每周限兑1次"
      },
      {
        id: "r5",
        title: "周末早晨赖床30分钟免催卡",
        tag: "特权免催",
        category: "privilege",
        icon: "🛏️",
        cost: 30,
        desc: "周日早上安睡不被打扰，享受自然醒的宁静早晨时光。",
        stock: 3,
        unlimited: false,
        statusText: "余额充足可兑换 剩余库存：3张"
      },
      {
        id: "r6",
        title: "自选一套课外漫画或科学图鉴",
        tag: "知识补给",
        category: "stationery",
        icon: "📚",
        cost: 100,
        desc: "新华书店或网上自选一本（价值60元以内，家长次日送达）！",
        stock: 1,
        unlimited: false,
        statusText: "余额充足可兑换 剩余库存：1套"
      }
    ],
    submittedWishes: [
      {
        id: "w1",
        title: "看一场新上映的科幻电影《流浪地球3》",
        cost: 70,
        status: "pending", // pending, approved, rejected
        submitTime: "今天 09:30"
      },
      {
        id: "w2",
        title: "想要一副专业碳素羽毛球拍",
        cost: 120,
        status: "approved",
        submitTime: "上周二"
      }
    ],
    redeemedLedger: [
      {
        id: "rl1",
        title: "30分钟阅读扩展时间",
        icon: "📖",
        cost: 30,
        time: "昨天兑换 · 消耗 30 🪙",
        status: "ready_verify", // ready_use, ready_verify, completed
        statusText: "待核销"
      },
      {
        id: "rl2",
        title: "周日绿道骑行双人券",
        icon: "🚴",
        cost: 60,
        time: "3天前兑换 · 消耗 60 🪙",
        status: "ready_verify",
        statusText: "待核验"
      },
      {
        id: "rl3",
        title: "自选必胜客披萨派对",
        icon: "🍕",
        cost: 80,
        time: "上周六 · 妈妈已盖章核销",
        status: "completed",
        statusText: "已完成"
      }
    ],
    monopolyMap: {
      week: "第 7 周 · 知识寻宝大冒险",
      term: "2026年秋季 · 航海季",
      currentDayIndex: 4, // 0=Mon, 1=Tue, 2=Wed, 3=Thu, 4=Fri (Today), 5=Sat, 6=Sun
      nodes: [
        {
          day: "周一",
          name: "汉字森林",
          icon: "🌲",
          desc: "字词大通关 & 诗词默写",
          status: "passed",
          reward: "+35 XP",
          stars: 3
        },
        {
          day: "周二",
          name: "几何山峰",
          icon: "⛰️",
          desc: "立体图形表面积突击",
          status: "passed",
          reward: "+40 XP",
          stars: 3
        },
        {
          day: "周三",
          name: "语法港湾",
          icon: "⚓",
          desc: "时态大对决与阅读听力",
          status: "passed",
          reward: "+35 XP",
          stars: 3
        },
        {
          day: "周四",
          name: "地理迷宫",
          icon: "🧭",
          desc: "世界地形与气候要点",
          status: "passed",
          reward: "+30 XP",
          stars: 3
        },
        {
          day: "周五",
          name: "综合挑战哨站",
          icon: "🏰",
          desc: "全科周测错题扫雷",
          status: "active", // active = 今日驻扎
          reward: "待攻克关卡 (3/5)",
          stars: 1
        },
        {
          day: "周六",
          name: "阅读秘境",
          icon: "📖",
          desc: "名著批注与思维导图",
          status: "locked",
          reward: "内含银宝箱 🎁",
          stars: 0
        },
        {
          day: "周日",
          name: "黄金宝藏岛",
          icon: "🏆",
          desc: "+100 金币大奖",
          status: "locked",
          reward: "周全勤徽章 ⭐",
          stars: 0
        }
      ]
    },
    subjectRadar: {
      totalHours: 9.3,
      distribution: [
        { subject: "语文文学探险", percent: 35, hours: 3.2, color: "bg-primary" },
        { subject: "数学逻辑攻防", percent: 28, hours: 2.5, color: "bg-amber-500" },
        { subject: "英语世界视界", percent: 20, hours: 1.8, color: "bg-emerald-500" },
        { subject: "历史地理小四门", percent: 10, hours: 1.0, color: "bg-blue-600" },
        { subject: "科学实践与课外拓展", percent: 7, hours: 0.8, color: "bg-indigo-600" }
      ],
      mentorAdvice: "大宝本周在「几何空间表面积」专题的专注力与攻克速度提升了 25%，答题草稿纸非常工整！建议周末将「英语原版朗读」增加10分钟，轻松冲刺全满分航线！"
    },
    badges: [
      { id: "b1", title: "晨读百灵鸟", desc: "连续7天已点亮", icon: "🌟", unlocked: true },
      { id: "b2", title: "闪电计算王", desc: "口算闯关100%正确", icon: "⚡", unlocked: true },
      { id: "b3", title: "错题清道夫", desc: "按时红笔纠错订正", icon: "🛡️", unlocked: true },
      { id: "b4", title: "书海潜水员", desc: "整本阅读达标 (2本)", icon: "📖", unlocked: true }
    ],
    monthlyBadge: {
      title: "月度探险领航者",
      progress: 19,
      target: 30,
      reward: "黄金探险家实体定制奖牌"
    }
  },

  erbao: {
    id: "erbao",
    name: "二宝",
    avatar: "🐰",
    level: 2,
    grade: "二年级 · 快乐小学徒",
    coins: 85,
    totalCoins: 460,
    todayEnergyXP: 0,
    lastActiveDate: new Date().toISOString().slice(0, 10),
    streakDays: 12,
    maxStreak: 15,
    completionRate: 88,
    completedQuestsCount: 22,
    totalWeeklyQuestsCount: 25,
    stampsCount: 94,
    passedRate: 98.0,
    bigGoal: {
      title: "迪士尼乐园玲娜贝儿巡游",
      period: "春季学期",
      note: "集满 200 个金币，和爸爸妈妈去上海迪士尼乐园！",
      targetCoins: 200,
      currentCoins: 85,
      image: "🎡"
    },
    subjects: [
      {
        id: "chinese_e",
        name: "语文关卡 · 拼音童话森林",
        icon: "🎈",
        desc: "拼音识字，童谣诵读，预估用时：40 分钟",
        tasks: [
          {
            id: "ec1",
            title: "生字抄写 (带拼音)",
            type: "home",
            requirement: "第二单元生字「日、月、水、火」各写 1 行，注音规范",
            estimatedMinutes: 15,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 15,
            coins: 5
          },
          {
            id: "ec2",
            title: "童诗朗诵与背诵",
            type: "home",
            requirement: "大声朗诵课文《秋天》，背诵第 1 自然段",
            estimatedMinutes: 10,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 10,
            coins: 3
          },
          {
            id: "ec3",
            title: "课堂练习小练笔",
            type: "school",
            requirement: "完成练习册第 15 页看图写拼音连线",
            estimatedMinutes: 15,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 15,
            coins: 5
          }
        ]
      },
      {
        id: "math_e",
        name: "数学关卡 · 萌宠数字乐园",
        icon: "🔢",
        desc: "口算巧练，思维萌芽，预估用时：30 分钟",
        tasks: [
          {
            id: "em1",
            title: "口算卡片 (100以内加减)",
            type: "school",
            requirement: "完成口算卡片 1 页（共 20 题，计时 5 分钟）",
            estimatedMinutes: 15,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 15,
            coins: 5
          },
          {
            id: "em2",
            title: "七巧板与图形拼接",
            type: "home",
            requirement: "拼出 3 种不同的小动物图形，拍照给老师看",
            estimatedMinutes: 15,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 15,
            coins: 5
          }
        ]
      },
      {
        id: "english_e",
        name: "英语关卡 · 字母启航岛",
        icon: "🎨",
        desc: "自然拼读，绘本跟读，预估用时：20 分钟",
        tasks: [
          {
            id: "ee1",
            title: "分级绘本音频听读",
            type: "home",
            requirement: "牛津树 Level 2 绘本《The Toy's Party》听读 2 遍",
            estimatedMinutes: 20,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 20,
            coins: 6
          }
        ]
      },
      {
        id: "extra_e",
        name: "体艺素养 · 活力小太阳",
        icon: "🏃",
        desc: "健康运动，童趣涂鸦，预估用时：35 分钟",
        tasks: [
          {
            id: "ex1",
            title: "跳绳 300 个打卡",
            type: "home",
            requirement: "分为 3 组每组 100 个，妈妈计时验收",
            estimatedMinutes: 15,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 15,
            coins: 5
          },
          {
            id: "ex2",
            title: "睡前自主绘本阅读",
            type: "home",
            requirement: "自主阅读《大卫不可以》系列绘本 20 分钟",
            estimatedMinutes: 20,
            completed: false,
            verified: false,
            verifiedTime: null,
            xp: 15,
            coins: 5
          }
        ]
      }
    ],
    rewards: [
      {
        id: "er1",
        title: "自选 1 盒乐高颗粒 / 泡泡玛特盲盒",
        tag: "超级心愿",
        category: "stationery",
        icon: "🎁",
        cost: 60,
        desc: "考完试或全周打卡全勤后兑现，家长陪同选购！",
        stock: 2,
        unlimited: false,
        statusText: "余额充足可兑换 剩余库存：2个"
      },
      {
        id: "er2",
        title: "去动物园 / 海洋馆喂海龟一次",
        tag: "周末出游",
        category: "outdoor",
        icon: "🐢",
        cost: 80,
        desc: "周末全家出发，亲手喂小动物拍照留念！",
        stock: 1,
        unlimited: false,
        statusText: "余额充足可兑换 剩余库存：1次"
      },
      {
        id: "er3",
        title: "妈妈讲 3 个睡前好听的童话故事",
        tag: "温馨陪伴",
        category: "privilege",
        icon: "🧚",
        cost: 20,
        desc: "今晚就可以点播，妈妈生动声线陪伴入睡。",
        stock: 999,
        unlimited: true,
        statusText: "余额充足可兑换 无限量供应"
      }
    ],
    submittedWishes: [
      {
        id: "ew1",
        title: "想要一把带闪光的粉色跳绳",
        cost: 35,
        status: "approved",
        submitTime: "前天"
      }
    ],
    redeemedLedger: [
      {
        id: "erl1",
        title: "妈妈讲睡前故事特权",
        icon: "🧚",
        cost: 20,
        time: "今天 · 待核销",
        status: "ready_verify",
        statusText: "待核销"
      }
    ],
    monopolyMap: {
      week: "第 7 周 · 拼音识字乐园",
      term: "2026年秋季 · 航海季",
      currentDayIndex: 4,
      nodes: [
        { day: "周一", name: "拼音树屋", icon: "🍎", desc: "声母韵母大连线", status: "passed", reward: "+30 XP", stars: 3 },
        { day: "周二", name: "数字蘑菇", icon: "🍄", desc: "20以内退位减法", status: "passed", reward: "+30 XP", stars: 3 },
        { day: "周三", name: "彩虹池塘", icon: "🌈", desc: "英文色彩与动物词", status: "passed", reward: "+25 XP", stars: 3 },
        { day: "周四", name: "故事城堡", icon: "🏰", desc: "童话故事大声读", status: "passed", reward: "+30 XP", stars: 3 },
        { day: "周五", name: "活力大冲关", icon: "⭐", desc: "跳绳打卡与生字小达人", status: "active", reward: "进行中 (2/3)", stars: 2 },
        { day: "周六", name: "画笔乐园", icon: "🎨", desc: "周末创意蜡笔画", status: "locked", reward: "内含铜宝箱 🎁", stars: 0 },
        { day: "周日", name: "糖果宝藏岛", icon: "🍭", desc: "全勤冰淇淋与快乐徽章", status: "locked", reward: "+60 金币大奖", stars: 0 }
      ]
    },
    subjectRadar: {
      totalHours: 6.5,
      distribution: [
        { subject: "拼音与汉字", percent: 40, hours: 2.6, color: "bg-primary" },
        { subject: "萌趣数学口算", percent: 30, hours: 2.0, color: "bg-amber-500" },
        { subject: "英文自然拼读", percent: 15, hours: 1.0, color: "bg-emerald-500" },
        { subject: "体适能跳绳", percent: 15, hours: 0.9, color: "bg-pink-500" }
      ],
      mentorAdvice: "二宝本周跳绳连续突破 100 个大关，口算正确率提升到 95%！继续保持快乐探索的好习惯！"
    },
    badges: [
      { id: "eb1", title: "跳绳小精灵", desc: "单次突破100次", icon: "🏃", unlocked: true },
      { id: "eb2", title: "拼音小侦探", desc: "声调拼读全满分", icon: "🔍", unlocked: true },
      { id: "eb3", title: "书桌整理官", desc: "放学主动收纳书包", icon: "🎒", unlocked: true }
    ],
    monthlyBadge: {
      title: "小小成长探险家",
      progress: 12,
      target: 20,
      reward: "迪士尼定制成长贴纸册"
    }
  }
};
