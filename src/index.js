import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import childRoutes from './routes/childRoutes.js';

// 加载环境变量
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 中间件
app.use(cors({
  origin: '*', // 允许前端本地 Vite (http://localhost:5173) 跨域调用
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// 健康检查
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: '🧭 探险学堂 Daily Quest 后台服务运行正常',
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
  try {
    // 连接 MongoDB Atlas 云数据库
    await connectDB();

    app.listen(PORT, () => {
      console.log(`\n🚀 [Server] 后端服务已启动: http://localhost:${PORT}`);
      console.log(`📡 [API Health Check]: http://localhost:${PORT}/api/health`);
      console.log(`👶 [Children API]: http://localhost:${PORT}/api/children\n`);
    });
  } catch (err) {
    console.error('❌ 服务启动失败:', err.message);
    process.exit(1);
  }
}

bootstrap();
