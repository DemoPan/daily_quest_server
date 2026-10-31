import mongoose from 'mongoose';

export async function connectDB() {
  let uri = (process.env.MONGODB_URI || "").trim();
  // 容错处理：自动剔除多余的引号或不小心粘贴的 "MONGODB_URI=" 前缀
  if ((uri.startsWith('\"') && uri.endsWith('\"')) || (uri.startsWith("'") && uri.endsWith("'"))) {
    uri = uri.slice(1, -1).trim();
  }
  if (uri.startsWith("MONGODB_URI=")) {
    uri = uri.replace(/^MONGODB_URI=/, "").trim();
  }

  if (!uri || uri.includes('<username>') || uri.includes('xxxx')) {
    console.warn('\n⚠️ [MongoDB] 警告: 未检测到有效的 MONGODB_URI 配置！');
    console.warn('👉 请打开 .env 文件，填入您在 MongoDB Atlas 创建的数据库连接串。\n');
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000, // 5秒超时提醒
    });
    console.log(`✅ [MongoDB] 云端数据库连接成功: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`❌ [MongoDB] 连接失败: ${error.message}`);
    console.error('💡 排查提示:');
    console.error('  1. 检查 MongoDB Atlas Network Access 是否添加了 0.0.0.0/0 (允许当前网络连接)');
    console.error('  2. 检查 Database Access 中的用户名与密码是否正确输入');
    console.error('  3. 检查密码中若包含特殊字符，需使用 URL 编码或更换纯字母数字密码');
    throw error;
  }
}
