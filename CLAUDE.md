# AgentCFO Frontend — Claude Code 维护协议

## 项目定位

AgentCFO｜DAO AI 财务官 — 面向 Web3 小团队 / DAO 的 AI 财务官 Demo Console 前端。

## 协作拓扑

| 角色 | 职责 |
|---|---|
| 用户 threetwoa | 最终决策 / 真实需求 / 风险接受度 / 最终拍板 |
| GPT / 外部 LLM | 方向讨论 / spec / prompt / 综合判断 |
| Claude Code | 读取仓库 / 执行文件 / 实现代码 / 生成报告 / 准备审查材料 |
| Codex | 基于 `git diff` 审查 / 找漏洞 / 反过度工程 |

## 信息路由

```txt
当前 Claude 执行必须知道的上下文       → ai/memory/
可复用 Prompt                          → ai/prompts/
任务进度、阶段验收、交付检查           → ai/checklists/
长期稳定的设计、架构、规范             → docs/
给后端 / 合约 / 物料 / 路演使用的材料   → handoff/
视觉参考、截图、Logo、MotionSites prompt → assets/
Next.js 路由入口                       → app/
业务组件                               → components/ 按业务域拆分
非 UI 逻辑                             → lib/
```

## 每轮任务执行流程

1. 读取 `CLAUDE.md`
2. 读取 `ai/memory/01-项目上下文.md`
3. 读取 `ai/memory/02-前端任务边界.md`
4. 读取 `ai/memory/05-Skill工作流路由.md`
5. 读取 `ai/memory/07-工具链安装状态.md`
6. 读取相关 checklist
7. 判断任务类型
8. 判断应该修改哪些目录
9. 写出简短执行计划
10. 最小有效修改
11. 运行可用检查；如当前环境无法运行，明确说明未验证
12. 更新 checklist / memory / docs / handoff 中需要维护的内容
13. 输出变更报告

## 安全边界

以下操作必须停下确认：
- 删除文件、覆盖文件、大规模移动文件
- `git push --force`、`git reset --hard`、`rm -rf`
- 修改权限、处理 secrets/tokens/API keys
- 生产环境变更、数据迁移
- 涉及用户数据、涉及支付/认证/安全

禁止把任何 key/token 写入源码、README、CLAUDE.md、AGENTS.md、docs、handoff、ai/memory。

## 安装禁令（硬规则）

任何安装 / 初始化 / MCP / Skill / hpsetup / create-next-app 命令，必须满足四件事：

1. **用户明确批准**
2. **命令来源已确认**
3. **已说明会修改哪些文件**
4. **若涉及 hpsetup / Pro 包安装，必须先 baseline commit，并优先 dry-run**

附加禁令：

- 未知安装命令不得执行
- MindPowerKit 安装命令未确认，不得编造
- Superpowers 安装命令未确认，不得编造
- **不得把 HEROUI_KEY / HEROUI_TOKEN / HEROUI_PERSONAL_TOKEN 写入任何文件**

## 技术栈

- Next.js + React + TypeScript + Tailwind CSS
- HeroUI v3 / HeroUI Pro（Dashboard / Form / Card / Modal / Table / Badge / Status / KPI / DataGrid / Sheet / Command / Audit Report）
- Aceternity UI（Landing / Hero / 动态背景 / Agent workflow 动效）
- Framer Motion = 默认主动效层；GSAP = 复杂 timeline/ScrollTrigger 才上

## 执行规则

非平凡工程任务遵守：`Explore → Plan → Execute → Verify → Summarize`

- **Explore**：先读上下文，禁止没读就改
- **Plan**：最小可执行计划，包含要改什么、不改什么、风险、如何验证
- **Execute**：只改任务相关文件，不顺手重构无关代码，不发明 API/文件/依赖，不扩大范围，发现范围变化时停下报告
- **Verify**：运行 tests / lint / typecheck / build / smoke test / screenshot / git diff review；无法验证时明确说"未验证：原因"
- **Summarize**：改了什么、为什么、验证了什么、未验证什么、是否需要 Codex review、下一步

## UI Workflow Routing

资产分层（L0→L6）：Mkdirs(业务) → MotionSites(灵感) → taste/frontend-design(判断) → Aceternity(动效) → HeroUI v3(组件) → Claude Code(执行) → Codex/screenshots(审查)

落地顺序：业务底盘跑通 → 选视觉方向 → 沉淀 DESIGN.md → 小范围移植 Aceternity/MotionSites → HeroUI 补交互组件 → Claude Code 执行 → screenshots + git diff → Codex review → GPT 综合

动效选择：CSS transition → Framer Motion → GSAP；除非明确要求，不碰 Three.js / R3F。

## 组件使用规则

HeroUI Pro：
- 用于 Demo Console 产品级组件
- 适合 Payment Plan、Risk Check、CAW Execution、Audit Report、KPI、DataGrid、Sheet、Command
- 使用 compound API
- 复杂组件必须保证 aria-label / textValue / getRowId 等字段
- 使用 design tokens，不硬编码大量颜色
- 不与 shadcn theme config 混用

Aceternity：
- 用于 Landing、Hero、动态背景、Agent workflow 的视觉增强
- 只选择性复制组件
- 必须记录来源模板、复制文件、依赖、修改点
- 复制后放入业务域组件或 assets/aceternity-selected 记录，不要污染根目录

MotionSites：
- 用于视觉 prompt、Hero 文案、动效语言
- 不作为组件库

Mkdirs：
- 用于参考目录结构、Vercel 部署、开源模板完整度
- 不引入 Sanity/Auth/Stripe/Resend 到 AgentCFO MVP

## 当前工程状态

- Next.js 基础工程已可运行（Plan B 手动初始化，pnpm）
- next 16 / react 19 / tailwindcss v4
- 可用脚本：`pnpm dev` / `pnpm build` / `pnpm start` / `pnpm typecheck`
- 仍处于 Mock-first 阶段，未安装 HeroUI Pro，未接真实 API / CAW
- 详见 `ai/memory/07-Next初始化状态.md`

## 版本与日期

- 初始化日期：2026-06-07
- 维护者：Claude Code 执行层
