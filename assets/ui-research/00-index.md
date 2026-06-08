# UI Asset Intelligence Scan — 总索引

> **扫描日期**: 2026-06-08
> **扫描目标**: AgentCFO / DAO AI 财务官 — 下一轮 UI 升级的设计依据
> **执行层**: Claude Code（只读扫描，不改源码）

---

## 扫描目的

AgentCFO 当前工程闭环已完成，但视觉资产没有真正利用起来。本轮扫描 4 个本地 UI 资产库 + 当前项目，提炼可借鉴、复制、改造、组合的视觉元素，产出结构化报告，指导下一轮 UI 升级。

目标视觉方向：
- AI Treasury Command Center
- Web3 DAO Finance Console
- Agentic Wallet / Risk Control / Audit Trail
- 商务简报风 + 高级 AI 产品感

---

## 扫描资产路径

| # | 资产 | 路径 | 状态 |
|---|---|---|---|
| 1 | HeroUI Pro v3 | `D:\code\hero-ui-v3` | ✅ 成功扫描 |
| 2 | Aceternity UI | `D:\OneDrive\Desktop\threetwoa\ui-component\aceternity` | ✅ 成功扫描 |
| 3 | mkdirs-template | `D:\OneDrive\Desktop\threetwoa\ui-component\mkdirs-template` | ✅ 成功扫描 |
| 4 | MotionSites Prompt Library | `D:\OneDrive\Desktop\threetwoa\motionsites.ai-prompt-library` | ✅ 成功扫描 |
| 5 | 当前 AgentCFO 项目 | `app/`, `components/`, `lib/`, `docs/` | ✅ 成功扫描 |

---

## 报告清单

| 文件 | 内容 | 关键结论 |
|---|---|---|
| `01-heroui-scan.md` | HeroUI Pro v3 组件扫描 | 46 个 Pro 组件 + 4 个模板。template-finances 最适合 AgentCFO。KPI、DataGrid、Widget、AppLayout 可直接映射。需要 hpsetup + HP Key 激活 |
| `02-aceternity-scan.md` | Aceternity UI 视觉资产扫描 | 8 个模板。ai-saas-template 最完整。Hero 背景、Bento Grid、AnimatedTooltip、InfiniteMovingCards 适合 landing。需要 Framer Motion |
| `03-mkdirs-scan.md` | mkdirs-template 结构扫描 | 全栈目录站模板。3 套首页变体 + dashboard 结构。适合参考页面组织和 shadcn/ui 组件用法。不应引入 Sanity/Auth/Stripe |
| `04-motionsites-scan.md` | MotionSites 视觉方向扫描 | 67 个 prompt 文件。提炼 15 个最适合的 prompt，生成 3 个 visual direction brief |
| `05-agentcfo-current-ui-map.md` | 当前 AgentCFO UI 盘点 | 6 个核心组件 + 1 个 shell。当前为"工程可用、视觉平庸"状态。每个组件给出外部资产映射 |
| `06-ui-upgrade-strategy.md` | UI 升级策略 | North Star 定义 + 视觉语言 + 页面架构 + 资产组合推荐 |
| `07-next-sprint-implementation-plan.md` | 下轮实现计划 | 3 个 Sprint 的详细执行计划，可直接进入开发 |

---

## 最终推荐路线摘要

### 推荐视觉方向
**AI Treasury Command Center（暗色主调 + 琥珀金强调 + 深蓝辅助）**

- 参考 MotionSites `orbit-web3-hero` 的暗色电影感 + 暖金 accent
- 参考 `guardnet-landing` 的大字排版 + 数据悬浮
- 拒绝赛博紫/大面积渐变，保持商务可信感

### 推荐资产组合

| 优先级 | 资产 | 用途 | 是否立即使用 |
|---|---|---|---|
| P0 | HeroUI Pro KPI / Widget / AppLayout | Demo Console 数据展示 + 布局骨架 | Sprint 1 |
| P0 | Aceternity Hero + Background | 首页 Landing 视觉冲击 | Sprint 1 |
| P1 | HeroUI Pro DataGrid | Payment Plan 表格升级 | Sprint 2 |
| P1 | Aceternity Bento Grid / Feature Cards | Landing 功能展示 | Sprint 2 |
| P2 | MotionSites 视觉 Prompt | 生成 Hero 背景视频/图 | Sprint 3 |
| P2 | Framer Motion 滚动动画 | 页面动效抛光 | Sprint 3 |

### 关键决策点

1. **是否接入 HeroUI Pro？** → 是，但需要 HP Key 运行 hpsetup
2. **是否使用 Aceternity 组件？** → 是，复制粘贴模式（不安装依赖）
3. **是否做 Dark Mode？** → 是，作为默认主题（暗色更符合"Command Center"感）
4. **是否录视频？** → 否，等 Sprint 2 完成后再评估

### 立即执行建议

从 **Sprint 1: Visual Structure Upgrade** 开始：
1. 接入 HeroUI Pro（hpsetup）
2. 重写 `/` 首页为 Landing（参考 Aceternity Hero + MotionSites 暗色方向）
3. 重写 `/demo` 布局为 AppLayout + KPI Strip（参考 template-finances）
4. 建立新的 Design Tokens（暗色主题）
