# Claude 会话记录

## 2026-06-07 — 初始化会话

- 创建 AgentCFO 前端工程骨架
- 创建目录结构、维护文档、Mock 数据、Handoff 文档
- 检查工具链状态
- 输出初始化报告

## 2026-06-07 — Codex Review 修复会话

- 修复 Mock/Real API 边界：`lib/api/client.ts` 添加 adapter 结构，`isMockMode()` 安全边界
- 统一 API Response Envelope：`ApiResponse<T>` / `ApiError`，全链路 shape 一致
- 补齐 Handoff 示例：Alice/Charlie/Data API ready，Bob blocked，BudgetRules / RiskCheckResult / AuditReport / Error 示例
- README 当前状态：移除误导性 `npm install` 命令，明确尚未初始化 Next.js
- 工具链安装边界加硬：四要件 + 禁令写入 CLAUDE.md / toolchain-installation.md / prompts / checklists
- HeroUI 复杂组件规则：DataGrid / Kanban / Sheet / Command / 通用状态 checklist
- Next.js 初始化冲突提示：保护已有 `app/page.tsx` 和 `app/demo/page.tsx`

## 关键决策

- 默认技术方向：Next.js + React + TypeScript + Tailwind CSS
- Mock-first 策略
- 不安装未知依赖
- 不写入任何密钥
- API adapter 层禁止组件直接 fetch
