# UI Upgrade Strategy

> **North Star**: AgentCFO 应该看起来像什么
> **日期**: 2026-06-08

---

## 1. North Star

AgentCFO 的最终视觉目标：

> **一个让评委 3 秒内说出"这不是普通 CRUD dashboard"的 AI Treasury Command Center。**

它需要同时传递三种感觉：
1. **专业可信** — 商务简报风，数据清晰，层级分明
2. **技术先进** — AI 产品感，暗色主题， subtle 动效
3. **Web3 原生** — Treasury/Finance 语义，钱包/链上元素，暗金 accent

参考气质：
- **Raycast** — 暗色 + 琥珀金 + 高数据密度 + 快捷操作
- **TradingView** — 金融数据可视化 + 专业图表
- **Linear** — 简洁线条 + 暗色 + 精致动效
- **Vercel Dashboard** — 现代 SaaS 控制台感

拒绝：
- ❌ 赛博紫/大面积渐变
- ❌ 廉价表格味
- ❌ 过度动效（Sparkles/粒子）
- ❌ 花哨 3D（Three.js/R3F）

---

## 2. 首页 `/` 应该变成什么

### 当前状态
白底简单卡片 + 标题 + CTA 按钮。无品牌感，无功能展示，无视觉冲击。

### 目标状态
**暗色电影感 Landing Page**，结构：

```
1. NavBar（固定顶部，透明 → 滚动后 backdrop-blur）
   → Logo + "AgentCFO" + 导航链接 + "View Demo" CTA

2. Hero Section（全屏，暗色背景 + subtle 网格动画）
   → Badge: "AI Treasury Command Center"
   → 大标题: "AgentCFO" + "/ DAO AI 财务官"
   → 副标题: "从贡献记录到风险检查付款计划，人类审批，模拟钱包执行，审计报告"
   → CTA: "View Demo Console →"（GlowButton）
   → 产品截图预览（glassmorphism 容器 + ContainerScroll 效果）

3. Stats Marquee（横向无限滚动）
   → "$50M+ Managed" / "100+ DAOs" / "0 Breaches" / "Base Sepolia"

4. Features Section（Bento Grid，6 格）
   → Payment Plan / Risk Gate / Human Approval / CAW Execution / Audit Report / Policy Engine
   → 每格: 图标 + 标题 + 描述 + 骨架屏演示

5. Workflow Preview（横向步骤条）
   → 7 个步骤的简化展示

6. CTA Section
   → "Ready to streamline your DAO treasury?"
   → "View Demo Console" + "GitHub"

7. Footer
   → 链接 + 版权 + "Built for Cobo Agentic Wallet Hackathon"
```

### 视觉语言
- 背景: `#0a0a0a` + subtle 网格线条动画
- 标题: Inter 700 + Instrument Serif italic accent
- 数据: JetBrains Mono（等宽字体）
- 卡片: `rgba(255,255,255,0.03)` + `border: rgba(255,255,255,0.08)`
- 强调: 琥珀金 `#f59e0b`

---

## 3. `/demo` 应该变成什么

### 当前状态
6 个区块纵向堆叠在白底 slate-50 上，无 Sidebar，无 KPI 概览，信息密度低。

### 目标状态
**AI Treasury Command Center Console**，结构：

```
Layout: AppLayout (Sidebar + Navbar + Main Content)

Sidebar:
  → Logo + "AgentCFO"
  → Nav Items: Dashboard / Payment Plan / Risk Gate / Approval / Execution / Audit
  → Bottom: Mock Mode Toggle + Settings

Navbar:
  → 当前页面标题 + Breadcrumb
  → 右侧: Mock Mode Badge + Time

Main Content (Dashboard 视图):
  → KPI Strip（4 格）
    - Total Planned: 50 USDC
    - Approved: 3 items
    - Blocked: 1 item (Bob)
    - Executed: 35 USDC

  → Top Section（2 列）
    - Left: Payment Plan Board（DataGrid 或精致卡片）
    - Right: Risk Gate Widget（RadialChart + 检查列表）

  → Bottom Section（2 列）
    - Left: Execution Result（交易列表 + Sheet 抽屉）
    - Right: Audit Report 摘要（KPI + 趋势）

  → Workflow Timeline（横向步骤条，固定在顶部或独立 Tab）

  → Human Approval（独立 Tab 或内嵌在 Payment Plan）
```

### 视觉语言
- 背景: `#0a0a0a`
- 卡片: `#171717` + 微弱边框
- 成功: `#10b981`（ emerald-500 ）
- 警告: `#f59e0b`（ amber-500 ）
- 危险: `#ef4444`（ red-500 ）
- 强调: `#3b82f6`（ blue-500 ）+ `#f59e0b`（ amber-500 ）
- 数据字体: JetBrains Mono

---

## 4. 核心视觉语言

### 4.1 Color

```css
:root {
  /* 背景 */
  --background: #0a0a0a;
  --background-elevated: #171717;
  --background-sunken: #000000;

  /* 文字 */
  --foreground: #e7e5e4;        /* warm off-white */
  --foreground-muted: #a8a29e;  /* warm gray */
  --foreground-subtle: #57534e; /* dark gray */

  /* 强调 */
  --accent-primary: #f59e0b;    /* amber-500 treasury gold */
  --accent-secondary: #3b82f6;  /* blue-500 agent blue */
  --accent-glow: rgba(245, 158, 11, 0.3);

  /* 状态 */
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;
  --info: #3b82f6;

  /* 边框 */
  --border: rgba(255, 255, 255, 0.08);
  --border-strong: rgba(255, 255, 255, 0.15);
}
```

### 4.2 Spacing

- 页面内边距: `px-4 sm:px-6 lg:px-8`
- 卡片内边距: `p-5` 或 `p-6`
- 卡片间距: `gap-4` 或 `gap-6`
- 区块间距: `space-y-8`
- 最大宽度: `max-w-7xl` (landing) / `max-w-[1280px]` (dashboard)

### 4.3 Cards

- 背景: `bg-[#171717]` 或 `bg-white/5`
- 边框: `border border-white/10`
- 圆角: `rounded-xl` (12px) 或 `rounded-2xl` (16px)
- 阴影: 极少使用，靠边框和背景区分层级
- Hover: `hover:border-white/20 hover:bg-white/[0.07]`

### 4.4 Typography

| 用途 | 字体 | 大小 | 字重 |
|---|---|---|---|
| 页面大标题 | Inter | `text-4xl md:text-6xl` | 700 |
| 标题 italic accent | Instrument Serif | 同标题 | 400 italic |
| 区块标题 | Inter | `text-lg` | 600 |
| 正文 | Inter | `text-sm` | 400 |
| 数据/金额 | JetBrains Mono | `text-2xl` | 600 |
| 标签/辅助 | Inter | `text-xs` | 500 |
| 导航 | Inter | `text-sm` | 500 |

### 4.5 Motion

| 场景 | 动效 | 实现方式 |
|---|---|---|
| 元素入场 | fade-in + slide-up | Framer Motion `initial/animate` |
| 元素入场延迟 | stagger 0.05s-0.1s | Framer Motion `staggerChildren` |
| Hover | scale 1.02 + border 变亮 | CSS transition 0.2s |
| 背景网格 | subtle 线条流动 | SVG animation / CSS animation |
| 数字变化 | count-up | 自定义 hook 或库 |
| 页面切换 | fade | CSS transition |

**原则**: 动效是盐，不是主食。每个动效必须有目的（引导注意力、反馈状态、解释层级）。

### 4.6 Icons

- 统一使用 `lucide-react` 图标库
- 尺寸规范: `w-4 h-4` (内联) / `w-5 h-5` (按钮) / `w-6 h-6` (区块图标)
- 颜色: 跟随文字颜色或状态色

### 4.7 Data Density

- Dashboard 页面信息密度要提高
- 当前 6 个区块纵向堆叠太松散
- 目标: 2 列网格布局，核心信息一屏可见
- KPI 数字用大字号 + 等宽字体
- 次要信息用 muted 颜色缩小字号

---

## 5. 页面信息架构

### 5.1 Landing `/`

```
NavBar (fixed)
Hero (100vh)
Stats Marquee
Features Bento Grid
Workflow Preview
CTA
Footer
```

### 5.2 Demo Console `/demo`

```
AppLayout
├── Sidebar
│   ├── Logo
│   ├── Nav (Dashboard, Payment, Risk, Approval, Execution, Audit)
│   └── Footer (Mock Toggle)
├── Navbar
│   ├── Title + Breadcrumb
│   └── Badges (Mock Mode, Network)
└── Main Content
    ├── KPI Strip (4 cards)
    ├── Grid (2 columns)
    │   ├── Payment Plan
    │   └── Risk Gate
    └── Grid (2 columns)
        ├── Execution Result
        └── Audit Report
```

### 5.3 未来扩展（可选）

```
/docs         → 文档页面（参考 mkdirs blog）
/settings     → 设置页面（参考 mkdirs settings）
/audit/[id]   → 单个审计报告详情
```

---

## 6. 推荐的资产使用组合

### 6.1 Sprint 1: Visual Structure（立即使用）

| 资产 | 组件 | 用途 |
|---|---|---|
| HeroUI Pro | `AppLayout` | Demo Console 布局骨架 |
| HeroUI Pro | `KPI` + `KPIGroup` | Dashboard KPI Strip |
| HeroUI Pro | `Navbar` | Landing + Demo 导航 |
| HeroUI Pro | `Card` (OSS) | 基础卡片容器 |
| Aceternity | `NavBar` | Landing 页导航 |
| Aceternity | `Hero` | Landing 首屏结构 |
| Aceternity | `Background` | 网格背景动画 |
| Aceternity | `Button` | 统一按钮风格 |
| MotionSites | `orbit-web3-hero` | 暗色 + 暖金方向 |

### 6.2 Sprint 2: Component Upgrade（下一阶段使用）

| 资产 | 组件 | 用途 |
|---|---|---|
| HeroUI Pro | `DataGrid` | Payment Plan 表格 |
| HeroUI Pro | `Widget` | Risk Gate / Audit 容器 |
| HeroUI Pro | `RadialChart` | 预算使用率仪表盘 |
| HeroUI Pro | `AreaChart` | 审计趋势图表 |
| HeroUI Pro | `Sheet` | Execution 详情抽屉 |
| HeroUI Pro | `Badge` + `TrendChip` | 状态标签 |
| Aceternity | `Features` (Bento) | Landing 功能展示 |
| Aceternity | `InfiniteMovingCards` | Logo Marquee |
| Aceternity | `AnimatedTooltip` | Wallet 详情悬停 |
| MotionSites | `veloce-finance` | 统计卡片结构 |

### 6.3 Sprint 3: Motion Polish（未来使用）

| 资产 | 组件 | 用途 |
|---|---|---|
| MotionSites | `finlytic-hero` | 背景视频方向 |
| MotionSites | `guardnet-landing` | 巨型排版参考 |
| Framer Motion | scroll animations | 滚动触发动画 |
| Framer Motion | `AnimatePresence` | 页面切换动画 |
| Aceternity | `ContainerScroll` | 产品截图展示 |

---

## 7. 哪些资产现在不用

| 资产 | 原因 |
|---|---|
| HeroUI `Kanban` | 无拖拽需求 |
| HeroUI `Carousel` | Landing 不需要轮播 |
| HeroUI `ComposedChart` | 数据维度不够 |
| Aceternity `SparklesCore` | 太花哨，干扰数据阅读 |
| Aceternity `Globe` | 与财务场景无关 |
| Aceternity `MacbookScroll` | 产品是 Web 应用 |
| Aceternity `Testimonials` | 无真实用户评价 |
| MotionSites `proactiv-marketing` | 粒子效果不适合 |
| mkdirs `Sanity/Auth/Stripe` | 后端依赖，不引入 |

---

## 8. 高风险做法警告

| 做法 | 风险 | 建议 |
|---|---|---|
| 接入 HeroUI Pro 但不运行 hpsetup | Pro 组件不可用，构建失败 | 必须先确认 HP Key 可用 |
| 同时引入 shadcn/ui 和 HeroUI | 主题变量冲突 | 二选一，推荐 HeroUI |
| 大量复制 Aceternity 组件 | 依赖膨胀（framer-motion + tsparticles）| 只复制需要的组件，手动精简 |
| 暗色主题 + 背景视频 | 性能问题，加载慢 | 先实现静态暗色，视频作为 Sprint 3 可选 |
| 改变 Mock 数据导致 demo story 断裂 | 评委看不懂 | 保留当前 demo story（Alice/Bob/Charlie）|
| 过度追求动效 | 分散注意力，显得不专业 | 每个动效必须有目的 |
| 改变信息架构（7 步骤）| 需要重写大量逻辑 | 保留当前 7 步骤，只做展示升级 |

---

## 9. 设计决策检查清单

- [ ] 暗色主题作为默认，还是提供切换？→ **默认暗色，暂不提供切换**
- [ ] 字体加载策略？→ **Google Fonts CDN（Inter + Instrument Serif + JetBrains Mono）**
- [ ] 图标库？→ **lucide-react**
- [ ] 动画库？→ **Framer Motion（仅 Landing 和 subtle 交互）**
- [ ] 响应式断点？→ **标准 Tailwind 断点（sm/md/lg/xl）**
- [ ] 最大内容宽度？→ **Landing: max-w-7xl / Demo: max-w-[1280px]**
- [ ] Mock 标注如何处理？→ **精致 Badge，不突兀但醒目**
- [ ] 是否打印样式？→ **Audit Report 提供打印样式（Sprint 2）**
