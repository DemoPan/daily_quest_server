import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { connectDB } from './config/db.js';
import childRoutes from './routes/childRoutes.js';

// 加载环境变量
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// 中间件
app.use(cors({
  origin: '*', // 允许前端本地 Vite (http://localhost:5173) 跨域调用
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// 健康检查
app.get('/api/health', (req, res) => {
  const isDbConnected = mongoose.connection.readyState === 1;
  res.json({
    status: 'ok',
    message: '🧭 探险学堂 Daily Quest 后台服务运行正常',
    database: isDbConnected ? 'connected' : 'connecting',
    timestamp: new Date().toISOString()
  });
});

// 路由挂载
app.use('/api/children', childRoutes);

// 404 处理
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} Not Found` });
});

// 启动服务
async function bootstrap() {
  // 先立即启动 HTTP 监听，确保 Render/Koyeb 等云平台的端口探测立刻秒级通过
  app.listen(PORT, () => {
    console.log(`\n🚀 [Server] 后端服务已启动，监听端口: ${PORT}`);
    console.log(`📡 [API Health Check]: /api/health`);
    console.log(`👶 [Children API]: /api/children\n`);
  });

  // 异步连接 MongoDB Atlas
  try {
    await connectDB();
  } catch (err) {
    console.error('❌ MongoDB 连接出现异常:', err.message);
  }
}

bootstrap();
