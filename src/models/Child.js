import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  type: { type: String, enum: ['home', 'school'], default: 'home' },
  requirement: { type: String, default: '' },
  estimatedMinutes: { type: Number, default: 15 },
  completed: { type: Boolean, default: false },
  verified: { type: Boolean, default: false },
  verifiedTime: { type: String, default: null },
  xp: { type: Number, default: 10 },
  coins: { type: Number, default: 5 }
}, { _id: false });

const SubjectSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  icon: { type: String, default: '📜' },
  desc: { type: String, default: '' },
  tasks: [TaskSchema]
}, { _id: false });

const RewardSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  tag: { type: String, default: '' },
  category: { type: String, default: 'privilege' },
  icon: { type: String, default: '🎁' },
  cost: { type: Number, required: true },
  desc: { type: String, default: '' },
  stock: { type: Number, default: 1 },
  unlimited: { type: Boolean, default: false },
  statusText: { type: String, default: '' }
}, { _id: false });

const WishSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  cost: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  submitTime: { type: String, default: '' }
}, { _id: false });

const RedeemedLedgerSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  icon: { type: String, default: '🎁' },
  cost: { type: Number, required: true },
  time: { type: String, default: '' },
  status: { type: String, enum: ['ready_use', 'ready_verify', 'completed'], default: 'ready_verify' },
  statusText: { type: String, default: '待核销' }
}, { _id: false });

const ChildSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true, index: true }, // 'dabao' | 'erbao'
  name: { type: String, required: true },
  avatar: { type: String, default: '🦁' },
  level: { type: Number, default: 1 },
  grade: { type: String, default: '' },
  coins: { type: Number, default: 0 },
  totalCoins: { type: Number, default: 0 },
  todayEnergyXP: { type: Number, default: 0 },
  lastActiveDate: { type: String, default: '' },
  streakDays: { type: Number, default: 0 },
  maxStreak: { type: Number, default: 0 },
  completionRate: { type: Number, default: 0 },
  completedQuestsCount: { type: Number, default: 0 },
  totalWeeklyQuestsCount: { type: Number, default: 0 },
  stampsCount: { type: Number, default: 0 },
  passedRate: { type: Number, default: 0 },
  bigGoal: {
    title: { type: String, default: '' },
    period: { type: String, default: '' },
    note: { type: String, default: '' },
    targetCoins: { type: Number, default: 0 },
    currentCoins: { type: Number, default: 0 },
    image: { type: String, default: '🏰' }
  },
  subjects: [SubjectSchema],
  rewards: [RewardSchema],
  submittedWishes: [WishSchema],
  redeemedLedger: [RedeemedLedgerSchema],
  monopolyMap: { type: mongoose.Schema.Types.Mixed, default: {} },
  subjectRadar: { type: mongoose.Schema.Types.Mixed, default: {} },
  badges: { type: mongoose.Schema.Types.Mixed, default: [] },
  monthlyBadge: { type: mongoose.Schema.Types.Mixed, default: {} },
  statsData: { type: mongoose.Schema.Types.Mixed, default: {} }
}, {
  timestamps: true,
  minimize: false
});

export const Child = mongoose.model('Child', ChildSchema);
