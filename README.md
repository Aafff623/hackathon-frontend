# AgentCFO｜DAO AI 财务官

面向 Web3 小团队 / DAO 的 AI 财务官 Demo Console。

## 当前状态

**Demo Console v0 已完成。**

- 工程骨架已初始化
- Mock 数据已就绪
- Handoff 文档已就绪
- Next.js + TypeScript + Tailwind CSS v4 基础配置已完成，可启动 / 类型检查 / 构建
- **Demo Console v0 已实现**（`/demo` 页面展示 AgentCFO 核心闭环）
- 当前仍处于 Mock-first / Handoff-first 阶段
- 尚未接入真实后端 API
- 尚未接入真实 Cobo Agentic Wallet
- 尚未安装 HeroUI Pro

## 运行方式

```bash
pnpm install     # 安装依赖
pnpm dev         # 启动开发服务器（http://localhost:3000）
pnpm typecheck   # TypeScript 类型检查（tsc --noEmit）
pnpm build       # 生产构建
pnpm start       # 启动生产服务器
```

## 核心 Demo 流程

```txt
贡献记录 / 订阅账单输入
→ AgentCFO 解析任务
→ 生成 Payment Plan
→ Risk Check：预算 / 白名单 / 单笔限额 / 重复付款
→ Human Approval
→ Cobo Agentic Wallet 执行付款
→ 展示 tx hash / Agent Wallet / Payment Status
→ 生成 Audit Report
```

## 技术栈

- Next.js (App Router) + React + TypeScript + Tailwind CSS v4
- HeroUI v3 / HeroUI Pro（尚未安装）
- Aceternity UI（选择性组件，尚未安装）

## 项目结构

```txt
app/            Next.js 路由（layout.tsx, globals.css, page.tsx, demo/）
components/     业务组件（按业务域拆分）
lib/            非 UI 逻辑（api / mock / workflow / constants）
docs/           设计、架构、规范
handoff/        给后端 / 合约 / 物料 / 路演的材料
ai/             AI 记忆、Prompt、检查清单
assets/         视觉参考、截图、Logo
public/         静态资源
```

## 环境变量

复制 `.env.example` 为 `.env.local` 并填写真实值（`.env.example` 仅含占位符）。

## 状态

- [x] 工程骨架初始化
- [x] Next.js / TypeScript / Tailwind v4 基础配置（可运行）
- [ ] 工具链安装：HeroUI Pro / Aceternity（待确认）
- [ ] Mock-first Demo Console（待实现）
- [ ] UI 视觉落地（待实现）
- [ ] 后端 API 联调（待确认）

## 下一步

1. 确认是否安装 HeroUI Pro（hpsetup，需 HEROUI_KEY）
2. 沉淀 DESIGN.md，确定视觉方向
3. 进入 Mock-first Demo Console 实现
