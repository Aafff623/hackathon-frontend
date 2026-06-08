# AgentCFO 当前 UI 盘点报告

> **扫描路径**: `app/`, `components/`, `lib/`, `docs/`
> **日期**: 2026-06-08

---

## 1. 当前页面和组件清单

### 1.1 页面 (Pages)

| 页面 | 路由 | 文件 | 说明 |
|---|---|---|---|
| 首页 | `/` | `app/page.tsx` | 简单介绍 + CTA，白底 |
| Demo Console | `/demo` | `app/demo/page.tsx` | 6 个核心区块纵向堆叠 |

### 1.2 布局 (Layout)

| 组件 | 文件 | 说明 |
|---|---|---|
| RootLayout | `app/layout.tsx` | 极简，无导航，无主题 |
| globals.css | `app/globals.css` | 仅导入 tailwindcss，无自定义样式 |

### 1.3 Demo Shell

| 组件 | 文件 | 说明 |
|---|---|---|
| DemoShell | `components/demo/demo-shell.tsx` | 页面外壳：header（Logo + 标题 + Demo badge + Mock Mode）+ main content |

### 1.4 核心组件 (6 个)

| # | 组件 | 文件 | 当前状态 |
|---|---|---|---|
| 1 | WorkflowTimeline | `components/workflow/workflow-timeline.tsx` | 横向/纵向步骤条，蓝色主题，有 completed/blocked 状态 |
| 2 | PaymentPlanBoard | `components/payment/payment-plan.tsx` | 付款计划列表，带状态标签（Approved/Blocked）和风险等级 |
| 3 | RiskGate | `components/risk/risk-gate.tsx` | 4 项风险检查卡片网格，绿色/红色状态 |
| 4 | HumanApproval | `components/approval/human-approval.tsx` | 审批状态列表，绿色（Approved）/红色（Blocked）|
| 5 | ExecutionResult | `components/execution/execution-result.tsx` | 模拟执行结果，含 tx hash + Agent Wallet + 总金额 |
| 6 | AuditReport | `components/audit/audit-report.tsx` | 审计报告，含 4 格统计 + 执行摘要 + 风险摘要 + 收据页脚 |

### 1.5 其他组件

| 组件 | 文件 | 说明 |
|---|---|---|
| WorkflowTimeline（landing）| `components/landing/landing-hero.tsx` | **不存在**，landing 目录只有 README |
| shared UI | `components/ui/` | 只有 README，无实际组件 |
| shared | `components/shared/` | 只有 README |
| agent | `components/agent/` | 只有 README |
| caw | `components/caw/` | 只有 README |

### 1.6 数据层

| 模块 | 文件 | 说明 |
|---|---|---|
| demo-data | `lib/demo/demo-data.ts` | 聚合所有 mock data |
| mock payment-plan | `lib/mock/payment-plan.ts` | 付款计划数据 |
| mock risk-check | `lib/mock/risk-check.ts` | 风险检查结果 |
| mock caw-execution | `lib/mock/caw-execution.ts` | CAW 执行结果 |
| mock audit-report | `lib/mock/audit-report.ts` | 审计报告数据 |
| mock budget-rules | `lib/mock/budget-rules.ts` | 预算规则 |
| mock contribution-records | `lib/mock/contribution-records.ts` | 贡献者记录 |
| workflow demo-steps | `lib/workflow/demo-steps.ts` | 7 个 DemoStep 定义 |
| workflow state-machine | `lib/workflow/demo-state-machine.ts` | 状态机类型 |

---

## 2. 当前视觉短板

### 2.1 全局问题

| # | 问题 | 严重程度 |
|---|---|---|
| 1 | **无 Landing 页视觉冲击** | 🔴 高 |
| 2 | **白底设计太平庸** | 🔴 高 |
| 3 | **无暗色模式** | 🟡 中 |
| 4 | **无动画/动效** | 🟡 中 |
| 5 | **信息密度低** | 🟡 中 |
| 6 | **卡片样式不统一** | 🟡 中 |
| 7 | **无专业布局骨架**（Sidebar/AppLayout）| 🟡 中 |
| 8 | **字体系统缺失**（全用默认）| 🟢 低 |
| 9 | **图标不统一**（内联 SVG）| 🟢 低 |
| 10 | **Mock 标注不突出** | 🟢 低 |

### 2.2 组件级问题

| 组件 | 问题 |
|---|---|
| HomePage | 白底简单卡片，无背景图/视频，无功能展示，无品牌感 |
| DemoShell | Header 太简单，无 Sidebar，无面包屑，无用户区 |
| WorkflowTimeline | 步骤线太细，状态图标小，无动画，blocked 状态不够醒目 |
| PaymentPlanBoard | 列表式布局，无表格功能（排序/筛选），风险标签样式简陋 |
| RiskGate | 2x2 网格太占空间，无 KPI 概览，检查项卡片样式不一致 |
| HumanApproval | 列表与 Payment Plan 重复信息，无审批操作按钮 |
| ExecutionResult | 模拟标注 banner 样式突兀，tx hash 不可点击，无区块链浏览器链接 |
| AuditReport | 统计数字小，无图表趋势，receipt 感不够正式 |

---

## 3. 每个组件可以借鉴哪个资产

### 3.1 `/` 首页

| 当前 | 推荐借鉴 | 来源 |
|---|---|---|
| 白底简单卡片 | **暗色 Hero + 背景网格动画 + Bento Grid** | Aceternity `ai-saas-template` + MotionSites `orbit-web3-hero` |

**具体映射：**
- `NavBar` → Aceternity `navbar/index.tsx`
- `Hero` → Aceternity `hero.tsx` + MotionSites `orbit-web3-hero` 暗色风格
- `Background` → Aceternity `background.tsx`（网格线条动画）
- `Features` → Aceternity `features.tsx`（Bento Grid）
- `CTA` → Aceternity `cta.tsx`
- `Footer` → Aceternity `footer.tsx`

### 3.2 `DemoShell`

| 当前 | 推荐借鉴 | 来源 |
|---|---|---|
| 简单 Header + Main | **AppLayout + Sidebar + Navbar + KPI Strip** | HeroUI `template-finances` + `AppLayout` |

**具体映射：**
- `AppLayout` → HeroUI Pro `AppLayout`
- `Sidebar` → HeroUI Pro `Sidebar` / template-finances `finances-sidebar.tsx`
- `Navbar` → HeroUI Pro `Navbar` / template-finances `finances-navbar.tsx`
- `KPI Strip` → HeroUI Pro `KPI` + `KPIGroup` / template-finances `balance-kpi-strip.tsx`

### 3.3 `PaymentPlanBoard`

| 当前 | 推荐借鉴 | 来源 |
|---|---|---|
| 自定义列表卡片 | **DataGrid 或 ItemCardGroup** | HeroUI Pro `DataGrid` + `ItemCard` |

**具体映射：**
- 表格展示 → HeroUI Pro `DataGrid`
- 卡片展示 → HeroUI Pro `ItemCard` + `ItemCardGroup`
- 顶部汇总 → HeroUI Pro `KPI` + `NumberValue`
- 状态标签 → HeroUI Pro `Badge` / `TrendChip`

### 3.4 `RiskGate`

| 当前 | 推荐借鉴 | 来源 |
|---|---|---|
| 2x2 卡片网格 | **Widget + KPI + 仪表盘** | HeroUI Pro `Widget` + `RadialChart` + `KPI` |

**具体映射：**
- 整体容器 → HeroUI Pro `Widget`
- 顶部概览 → HeroUI Pro `KPI`（通过/失败数量）
- 预算使用率 → HeroUI Pro `RadialChart`（仪表盘）
- 检查项列表 → HeroUI Pro `ListView` / `ItemCard`
- 状态标签 → HeroUI Pro `Badge`

### 3.5 `HumanApproval`

| 当前 | 推荐借鉴 | 来源 |
|---|---|---|
| 简单列表 | **ActionBar + ItemCard + 审批按钮** | HeroUI Pro `ActionBar` + `ItemCard` |

**具体映射：**
- 审批操作 → HeroUI Pro `ActionBar`
- 项目卡片 → HeroUI Pro `ItemCard`
- 状态标识 → HeroUI Pro `Badge` / `TrendChip`

### 3.6 `ExecutionResult`

| 当前 | 推荐借鉴 | 来源 |
|---|---|---|
| 简单列表 + 模拟 banner | **Sheet + ItemCard + 区块链浏览器链接** | HeroUI Pro `Sheet` + `ItemCard` |

**具体映射：**
- 详情抽屉 → HeroUI Pro `Sheet`
- 交易卡片 → HeroUI Pro `ItemCard`
- 区块链链接 → 外部链接 + 图标
- 模拟标注 → 更精致的 `Badge` 或 Banner 组件

### 3.7 `AuditReport`

| 当前 | 推荐借鉴 | 来源 |
|---|---|---|
| 简单统计 + 文本摘要 | **KPI + Widget + AreaChart + 正式 Receipt** | HeroUI Pro `KPI` + `Widget` + `AreaChart` |

**具体映射：**
- 顶部统计 → HeroUI Pro `KPI` + `KPIGroup`（大数字）
- 趋势图表 → HeroUI Pro `AreaChart`（执行历史趋势）
- 容器 → HeroUI Pro `Widget`
- Receipt 感 → 更正式的边框 + 印章/签名区域 + 打印样式

### 3.8 新增组件建议

| 新增组件 | 推荐借鉴 | 来源 | 理由 |
|---|---|---|---|
| `KpiStrip` | `balance-kpi-strip.tsx` | HeroUI template-finances | Dashboard 顶部需要 KPI 概览 |
| `ActivityFeed` | `recent-activity-table.tsx` | HeroUI template-finances | 需要实时活动流展示 |
| `HeroSection` | `hero.tsx` + `background.tsx` | Aceternity | 首页需要视觉冲击 |
| `FeatureGrid` | `features.tsx` | Aceternity | 功能展示需要 Bento Grid |
| `LogoMarquee` | `infinite-moving-cards.tsx` | Aceternity | 生态合作伙伴展示 |

---

## 4. 哪些组件保留

| 组件 | 保留理由 |
|---|---|
| `WorkflowTimeline` | 结构清晰，状态逻辑正确，只需样式升级 |
| `PaymentPlanBoard` | 数据结构正确，只需展示方式升级 |
| `RiskGate` | 检查逻辑正确，只需视觉升级 |
| `HumanApproval` | 审批逻辑正确，只需交互增强 |
| `ExecutionResult` | 数据展示正确，只需精致化 |
| `AuditReport` | 报告结构正确，只需视觉升级 |
| `demo-data.ts` | 数据聚合层设计合理 |
| `mock/*` | Mock 数据结构完整 |
| `workflow/*` | 工作流定义清晰 |

---

## 5. 哪些组件升级

| 组件 | 升级方向 | 优先级 |
|---|---|---|
| `HomePage` | 重写为 Landing（暗色 Hero + Bento Grid + CTA）| P0 |
| `DemoShell` | 升级为 AppLayout + Sidebar + Navbar | P0 |
| `WorkflowTimeline` | 增加动画 + 增大图标 + 优化 blocked 状态 | P1 |
| `PaymentPlanBoard` | 升级为 DataGrid 或精致卡片列表 | P1 |
| `RiskGate` | 增加 KPI 概览 + RadialChart + Widget 容器 | P1 |
| `AuditReport` | 增加 KPI 大数字 + 图表 + Receipt 正式感 | P1 |
| `ExecutionResult` | 增加 Sheet 抽屉 + 区块链链接 | P2 |
| `HumanApproval` | 增加 ActionBar + 审批按钮 | P2 |

---

## 6. 哪些组件新增

| 新增组件 | 说明 | 优先级 |
|---|---|---|
| `KpiStrip` | Dashboard 顶部 4 格 KPI（Total/Approved/Blocked/Executed）| P0 |
| `HeroSection` | Landing 页首屏 | P0 |
| `FeatureGrid` | Landing 页 Bento Grid 功能展示 | P0 |
| `LogoMarquee` | Landing 页生态 Logo 无限滚动 | P1 |
| `ActivityFeed` | Demo Console 实时活动流 | P1 |
| `BackgroundGrid` | 暗色网格背景动画 | P1 |
| `GradientText` | 渐变文字效果（标题）| P2 |
| `GlowButton` | 发光按钮 CTA | P2 |
| `GlassCard` | 玻璃质感卡片 | P2 |

---

## 7. 当前组件与外部资产映射总表

| AgentCFO 组件 | 保留/升级/新增 | HeroUI 资产 | Aceternity 资产 | MotionSites 灵感 |
|---|---|---|---|---|
| `/` 首页 | 重写 | `Navbar`, `Card` | `Hero`, `Background`, `Features`, `CTA`, `Footer` | `orbit-web3-hero`, `guardnet-landing` |
| `DemoShell` | 升级 | `AppLayout`, `Sidebar`, `Navbar`, `KPI` | — | — |
| `WorkflowTimeline` | 升级 | `Stepper` | — | — |
| `PaymentPlanBoard` | 升级 | `DataGrid`, `ItemCard`, `Badge` | — | — |
| `RiskGate` | 升级 | `Widget`, `KPI`, `RadialChart`, `Badge` | — | — |
| `HumanApproval` | 升级 | `ActionBar`, `ItemCard`, `Badge` | — | — |
| `ExecutionResult` | 升级 | `Sheet`, `ItemCard` | `AnimatedTooltip` | — |
| `AuditReport` | 升级 | `KPI`, `Widget`, `AreaChart` | — | — |
| `KpiStrip` | 新增 | `KPI`, `KPIGroup`, `NumberValue` | — | `veloce-finance` |
| `HeroSection` | 新增 | — | `Hero`, `Background` | `orbit-web3-hero` |
| `FeatureGrid` | 新增 | — | `Features` (Bento) | `guardnet-landing` |
| `LogoMarquee` | 新增 | — | `InfiniteMovingCards` | — |
