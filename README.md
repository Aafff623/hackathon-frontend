# AgentCFO｜DAO AI 财务官

面向 Web3 小团队 / DAO 的 AI 财务官 Demo Console。

## 当前状态

**当前仓库处于 frontend workspace initialization 阶段。**

- 工程骨架已初始化
- Mock 数据已就绪
- Handoff 文档已就绪
- **尚未初始化 Next.js**
- **尚无 package.json**
- **暂不可直接 `npm install` / `npm run dev`**

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

- Next.js + React + TypeScript + Tailwind CSS
- HeroUI v3 / HeroUI Pro
- Aceternity UI（选择性组件）

## 项目结构

```txt
app/            Next.js 路由
components/     业务组件（按业务域拆分）
lib/            非 UI 逻辑（api / mock / workflow / constants）
docs/           设计、架构、规范
handoff/        给后端 / 合约 / 物料 / 路演的材料
ai/             AI 记忆、Prompt、检查清单
assets/         视觉参考、截图、Logo
public/         静态资源
```

## 环境变量

复制 `.env.example` 为 `.env.local` 并填写真实值。

## 状态

- [x] 工程骨架初始化
- [ ] 工具链安装（待确认）
- [ ] Mock-first Demo Console（待实现）
- [ ] UI 视觉落地（待实现）
- [ ] 后端 API 联调（待确认）

## 下一步

1. review Codex 修复结果
2. 初始化 Git
3. 确认 Next.js + pnpm + Tailwind
4. 初始化可运行项目（注意：当前已有 `app/page.tsx` 和 `app/demo/page.tsx` 占位，初始化时避免直接覆盖）
5. 进入 Mock-first Demo Console 实现
