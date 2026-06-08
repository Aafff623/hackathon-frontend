# HeroUI Pro v3 扫描报告

> **扫描路径**: `D:\code\hero-ui-v3`
> **扫描范围**: Docs、hp-components、templates、Explorer
> **日期**: 2026-06-08

---

## 1. 目录结构摘要

```
hero-ui-v3/
├── Docs/                          # 14 篇文档镜像（快速开始、hpsetup、MCP、安全审计等）
├── hp-components/                 # 46 个组件示例片段（.tsx）
├── templates/                     # 4 个 Pro 模板源码
│   ├── template-chat/             # 聊天应用 · port 3004
│   ├── template-dashboard/        # 仪表盘 · port 3003
│   ├── template-email/            # 邮件客户端 · port 3005
│   └── template-finances/         # 财务管理 · port 3006 ⭐ 最适合 AgentCFO
├── Explorer/                      # 7 个 phase 试验性探索
├── figma kit/                     # Figma 设计稿
└── Memory/                        # 跨会话决策记录
```

---

## 2. 关键组件候选（46 个 Pro 组件）

### 2.1 图表类（8 个）

| 组件 | 说明 | AgentCFO 适配性 |
|---|---|---|
| `AreaChart` | 面积图，支持渐变填充 | Audit Report 趋势展示 |
| `BarChart` | 柱状图，支持分组/堆叠 | Payment Plan 对比 |
| `LineChart` | 折线图，支持多线 | 预算执行趋势 |
| `PieChart` | 饼图，支持环形 | 资金分配占比 |
| `RadarChart` | 雷达图 | Risk Gate 多维度评分（未来） |
| `RadialChart` | 径向图/仪表盘 | 预算使用率仪表盘 |
| `ComposedChart` | 组合图 | 复杂数据展示 |
| `ChartTooltip` | 图表通用 Tooltip | 所有图表配套 |

### 2.2 数据展示（7 个）⭐ 高优先级

| 组件 | 说明 | AgentCFO 适配性 |
|---|---|---|
| `KPI` | KPI 卡片，货币/百分比格式化 | **Audit Report 顶部统计、Payment Plan 汇总** |
| `KPIGroup` | KPI 卡片组，水平/垂直布局 | **Dashboard 顶部 KPI Strip** |
| `TrendChip` | 趋势芯片，显示涨跌 | Risk/Approval 状态趋势 |
| `NumberValue` | 数字格式化显示 | 金额显示统一 |
| `Rating` | 星级评分 | 暂不适用 |
| `EmptyState` | 空状态占位 | 暂无数据时友好展示 |
| `NumberStepper` | 数字步进器 | 暂不适用 |

### 2.3 数据表格与看板（3 个）⭐ 高优先级

| 组件 | 说明 | AgentCFO 适配性 |
|---|---|---|
| `DataGrid` | 数据表格，排序/筛选/分页/虚拟化 | **Payment Plan Board 升级为目标** |
| `Kanban` | 看板，支持拖拽 | Human Approval 流程看板（未来） |
| `FileTree` | 文件树 | 暂不适用 |

### 2.4 导航（6 个）

| 组件 | 说明 | AgentCFO 适配性 |
|---|---|---|
| `Sidebar` | 侧边栏，持久化/响应式 | Demo Console 导航 |
| `Navbar` | 导航栏，滚动隐藏 | Landing 页导航 |
| `AppLayout` | 应用布局骨架（navbar+sidebar+aside） | **Demo Console 整体布局** |
| `Stepper` | 步骤条，横向/纵向 | Workflow Timeline 替代方案 |
| `Segment` | 分段控制器 | 视图切换 |
| `FloatingToc` | 浮动目录 | 暂不适用 |

### 2.5 浮层（5 个）

| 组件 | 说明 | AgentCFO 适配性 |
|---|---|---|
| `Sheet` | 底部抽屉/弹层，拖拽关闭 | Execution Result 详情抽屉 |
| `Command` | 命令面板（Cmd+K） | 全局搜索/快捷操作 |
| `ContextMenu` | 右键上下文菜单 | 暂不适用 |
| `HoverCard` | 悬停卡片 | Wallet Address 悬停展示详情 |
| `Modal` | 模态框 | 通用弹窗 |

### 2.6 布局与容器（4 个）

| 组件 | 说明 | AgentCFO 适配性 |
|---|---|---|
| `Widget` | 仪表盘 Widget（KPI/图表/表格组合） | **Risk Gate / Audit Report 容器** |
| `ItemCard` | 条目卡片 | Payment Plan 单项卡片 |
| `ItemCardGroup` | 条目卡片组 | Payment Plan 列表 |
| `Resizable` | 可调整尺寸面板 | 暂不适用 |

### 2.7 表单/反馈/列表（略）

- 表单类（CellSelect/Switch/Slider/ColorPicker/InlineSelect/NativeSelect）：暂不适用
- 反馈类（PressableFeedback/DropZone/EmojiReactionButton/CheckboxButtonGroup/RadioButtonGroup）：暂不适用
- 列表类（ListView/ActionBar）：ActionBar 可与 DataGrid 联动

---

## 3. 模板评估

| 模板 | 端口 | 复杂度 | 推荐度 | 与 AgentCFO 关联 |
|---|---|---|---|---|
| **template-finances** | 3006 | 高 | ⭐⭐⭐⭐⭐ | **直接对应！财务 dashboard + KPI + 持仓列表 + 交易记录** |
| template-dashboard | 3003 | 中 | ⭐⭐⭐⭐☆ | 通用后台，可参考布局 |
| template-chat | 3004 | 中 | ⭐⭐⭐☆☆ | 场景不匹配 |
| template-email | 3005 | 低 | ⭐⭐☆☆☆ | 场景不匹配 |

template-finances 的关键结构：
- `AppShell` → `AppLayout` + `FinancesNavbar` + `FinancesSidebar`
- `BalanceKpiStrip` → 4 列 `KPI` 卡片网格
- `PortfolioChartCard` → `AreaChart` + `Card`
- `HoldingsList` → 持仓列表（类似 Payment Plan）
- `RecentActivityTable` → 交易记录表格（类似 Execution Result）

---

## 4. 对 AgentCFO 的适配表

| AgentCFO 当前区块 | 推荐 HeroUI Pro 组件 | 备注 |
|---|---|---|
| DemoShell | `AppLayout` + `Navbar` + `Sidebar` | 整体替换为专业布局骨架 |
| Workflow Timeline | `Stepper` | 或保留当前自定义 Timeline |
| Payment Plan Board | `DataGrid` / `ItemCardGroup` | 从自定义列表升级为专业表格 |
| Risk Gate | `Widget` + `KPI` + `Badge` | 风险检查用 Widget 容器 + KPI 统计 |
| Human Approval | `ActionBar` + `ItemCard` | 审批操作栏 + 卡片列表 |
| Execution Result | `Sheet` + `ItemCard` | 执行详情用 Sheet 抽屉展示 |
| Audit Report | `KPI` + `Widget` + `AreaChart` | 顶部 KPI + 图表趋势 |
| Landing / | `Navbar` + `Card` | 导航 + 功能卡片 |

---

## 5. 最小接入建议

### 5.1 接入前提

```bash
# 1. 需要有效的 HP Key（hp_ + 48 位十六进制）
# 2. 运行 hpsetup 激活 Pro 包
npx -y hpsetup@latest hp_xxxxxxxx

# 3. globals.css 引入顺序（铁律）
@import "tailwindcss";
@import "@heroui/styles";
@import "@heroui-pro/react/css";   /* 必须最后 */
```

### 5.2 最小接入组件集（MVP）

如果只能选 5 个组件接入：

1. **`AppLayout`** — Demo Console 布局骨架
2. **`KPI` / `KPIGroup`** — 顶部数据统计
3. **`DataGrid`** — Payment Plan 表格
4. **`Widget`** — 各区块容器
5. **`Card`**（开源）— 基础卡片

### 5.3 接入顺序建议

```
Phase 1: AppLayout + KPI → 建立布局骨架
Phase 2: DataGrid + Widget → 数据展示升级
Phase 3: AreaChart + Sheet → 图表 + 交互增强
Phase 4: Command + Sidebar → 高级交互
```

---

## 6. 不建议接入的组件

| 组件 | 原因 |
|---|---|
| `Kanban` | 当前 AgentCFO 没有拖拽需求，过度设计 |
| `FileTree` | 与财务场景无关 |
| `Carousel` | Landing 页不需要轮播 |
| `CellColorPicker` / `CellSlider` | 与 treasury 场景无关 |
| `EmojiReactionButton` | 不专业 |
| `Resizable` | 增加复杂度，当前不需要 |
| `ComposedChart` | 数据维度不够，简单图表即可 |

---

## 7. 风险和依赖

| 风险 | 级别 | 说明 |
|---|---|---|
| 需要 HP Key | 中 | 必须运行 hpsetup，需要有效授权 |
| 闭源包 | 中 | `@heroui-pro/react` 是闭源，无法直接查看源码调试 |
| 与 shadcn 冲突 | 中 | HeroUI 主题变量与 shadcn 冲突，不能混用 |
| Tailwind v4 兼容性 | 低 | 已确认支持 Tailwind CSS v4 |
| 构建体积 | 低 | Pro 组件支持 tree-shaking |
| 授权过期 | 低 | 当前授权有效期至 2027-05-01 |

---

## 8. 关键文件路径

| 用途 | 路径 |
|---|---|
| 组件示例 | `D:\code\hero-ui-v3\hp-components\<component-name>\` |
| Finances 模板 | `D:\code\hero-ui-v3\templates\template-finances\` |
| KPI 示例 | `D:\code\hero-ui-v3\hp-components\kpi\` |
| DataGrid 示例 | `D:\code\hero-ui-v3\hp-components\data-grid\` |
| AreaChart 示例 | `D:\code\hero-ui-v3\hp-components\area-chart\` |
| AppLayout 示例 | `D:\code\hero-ui-v3\hp-components\app-layout\` |
| 使用指南 | `D:\code\hero-ui-v3\Docs\hero-ui-v3-usage-guide.md` |
