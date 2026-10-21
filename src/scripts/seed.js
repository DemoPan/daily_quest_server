import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { connectDB } from '../config/db.js';
import { Child } from '../models/Child.js';
import { initialChildrenData } from '../data/initialData.js';

dotenv.config();

async function runSeed() {
  console.log('🌱 [Seed] 准备向云端 MongoDB 导入初始数据...');

  try {
    await connectDB();

    console.log('🧹 正在清空旧的儿童档案数据...');
    await Child.deleteMany({});

    const childrenArray = Object.values(initialChildrenData);
    console.log(`📦 正在写入 ${childrenArray.length} 条基础档案 (大宝、二宝)...`);

    for (const child of childrenArray) {
      await Child.create(child);
      console.log(`  ✨ 成功导入: ${child.name} (${child.grade})`);
    }

    console.log('\n🎉 [Seed] 初始数据全部成功导入到 MongoDB Atlas 云数据库！');
    process.exit(0);
  } catch (err) {
    console.error('❌ [Seed] 导入失败:', err.message);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

runSeed();
