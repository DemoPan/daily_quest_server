# 🧭 探险学堂 · Daily Quest 后端服务 (Node.js + MongoDB Atlas)

> 专为家庭打卡系统设计的后端 RESTful API 服务，使用 Node.js、Express、Mongoose 并连接 MongoDB Atlas 云数据库。

---

## 🚀 极速上手流程

### 1. 注册与配置 MongoDB Atlas 云数据库 (永久免费 512MB)

1. 前往 [MongoDB Atlas 官网](https://www.mongodb.com/cloud/atlas/register) 注册并登录。
2. 创建免费集群：选择 **M0 Free**（共享型集群，0元），云厂商和区域任选（如 AWS / Google Cloud 新加坡或香港节点）。
3. **创建数据库用户 (Database Access)**：
   - 导航到左侧 **Security -> Database Access** -> 点击 **Add New Database User**。
   - Authentication Method 选择 `Password`。
   - 设置用户名（如 `admin`）和密码（建议使用纯英文与数字，避免 URL 特殊字符冲突）。
   - Database User Privileges 选择 `Read and write to any database`。
4. **设置网络白名单 (Network Access)**：
   - 导航到左侧 **Security -> Network Access** -> 点击 **Add IP Address**。
   - 选择 **Allow Access from Anywhere**（即 `0.0.0.0/0`），点击 Confirm。
5. **获取连接串 (Connection String)**：
   - 回到 **Database -> Deployment -> Clusters**，点击集群卡片上的 **Connect** 按钮。
   - 选择 **Drivers** (Node.js)。
   - 复制连接字符串，格式类似：
     ```text
     mongodb+srv://admin:<password>@cluster0.xxxx.mongodb.net/?retryWrites=true&w=majority
     ```

---

### 2. 本地配置与运行

```bash
# 1. 进入后端项目目录
cd /Users/m/mpan/daily_quest_server

# 2. 安装依赖
npm install

# 3. 配置环境变量
# 编辑 .env 文件，将 MONGODB_URI 替换为你真实的 Atlas 连接串，并在末尾加上库名 daily_quest：
# 例: MONGODB_URI=mongodb+srv://admin:你的密码@cluster0.xxxx.mongodb.net/daily_quest?retryWrites=true&w=majority
```

### 3. 一键初始化种子数据 (Seed)

配置好 `.env` 后，运行种子脚本将前端大宝、二宝的完整闯关初始数据导入云端：

```bash
npm run seed
```

看到输出 `🎉 [Seed] 初始数据全部成功导入到 MongoDB Atlas 云数据库！` 即表示成功。

### 4. 启动后端开发服务

```bash
npm run dev
```

服务默认运行在 `http://localhost:5000`。

---

## 📡 核心 API 清单

| 方法 | 接口路径 | 描述 |
| :--- | :--- | :--- |
| `GET` | `/api/health` | 后端服务与数据库健康检查 |
| `GET` | `/api/children` | 获取所有孩子数据对象（格式同前端 `childrenData`） |
| `GET` | `/api/children/:id` | 获取单个孩子档案 (`dabao` / `erbao`) |
| `PUT` | `/api/children/:id` | 更新保存单个孩子全部数据 |
| `POST`| `/api/children/sync-all` | 全量同步前后端数据（支持 LocalStorage 一键迁移） |
| `POST`| `/api/children/:id/tasks/:taskId/toggle` | 孩子打卡/取消打卡关卡任务 |
| `POST`| `/api/children/:id/tasks/:taskId/verify` | 家长签印核验单个任务 |
| `POST`| `/api/children/:id/verify-all` | 家长晚间 8:30 一键批量盖印全科关卡 |
| `POST`| `/api/children/:id/rewards/redeem` | 兑换心愿货架好礼（自动扣减金币与库存） |
| `POST`| `/api/children/:id/coins/adjust` | 奖励额外金币或扣除金币 |

---

## 📦 独立 Git 提交指引

```bash
cd /Users/m/mpan/daily_quest_server
git add .
git commit -m "feat: init Node.js + Express + MongoDB Atlas backend"
```
