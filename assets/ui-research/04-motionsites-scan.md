# MotionSites Prompt Library 扫描报告

> **扫描路径**: `D:\OneDrive\Desktop\threetwoa\motionsites.ai-prompt-library`
> **扫描范围**: Pro prompts (67 个) + prompts (更多) + demos + docs
> **日期**: 2026-06-08

---

## 1. 最适合 AgentCFO 的 15 个 Prompt 文件

从 67+ 个 prompt 中，按 **finance / AI / SaaS / Web3 / security / dashboard / command center** 维度筛选：

| # | Prompt 文件 | 类别 | 可借鉴元素 |
|---|---|---|---|
| 1 | `orbit-web3-hero.md` | Web3 | **暗色电影感 + 暖金 accent + 背景视频 + 大字排版** |
| 2 | `guardnet-landing.md` | Security | **暗色安全风 + 巨型排版 + 数据悬浮 + 视频背景** |
| 3 | `veloce-finance-landing.md` | Finance | **fintech 卡片 + 品牌渐变 + 视频背景 + 统计数字** |
| 4 | `finlytic-hero.md` | AI/SaaS | **暗色背景视频 + 模糊药丸 + 大标题 + glassmorphism** |
| 5 | `Web3 EOS Hero.md` | Web3 | **纯黑背景视频 + 渐变文字 + pill 按钮 + 简约导航** |
| 6 | `crypto-wealth-hero.md` | Web3/Finance | **滚动联动视频缩放 + 弹出卡片 + 渐变边框按钮** |
| 7 | `Datacore SaaS Hero.md` | SaaS/AI | **Linear 风格暗色 + HLS 视频 + glassmorphism + 多字体** |
| 8 | `Taskora SaaS Hero.md` | SaaS | **任务管理 SaaS 风格 + 简洁卡片** |
| 9 | `apex-saas-hero.md` | SaaS | **SaaS 落地页结构 + 功能网格** |
| 10 | `focus-ai-landing.md` | AI | **AI 产品感 + 暗色 + 强调色** |
| 11 | `neovision-landing.md` | AI/Tech | **科技感 + 数据可视化元素** |
| 12 | `akor-security-landing.md` | Security | **安全/审计感 + 暗色 + 警示色** |
| 13 | `ClearInvoice SaaS Hero.md` | Finance/SaaS | **财务 SaaS 风格 + 清晰数据展示** |
| 14 | `pro-ai-deck.md` | AI | **AI 演示文稿风格 + 信息层级** |
| 15 | `stellar-ai-v2-hero.md` | AI | **星空暗色 + 高端感** |

---

## 2. 每个 Prompt 的可借鉴元素（详细）

### 2.1 orbit-web3-hero.md ⭐⭐⭐⭐⭐

**核心视觉元素：**
- 深暗绿黑色背景 (`--background: 150 20% 5%`)
- 暖琥珀金强调色 (`--accent: 45 70% 75%`)
- 全屏背景视频 + 暗色覆盖
- 大字号标题 (`text-6xl md:text-8xl lg:text-[7rem]`)
- "neon glow" 文字发光效果（双层模糊 span）
- 底部 Logo Marquee 无限滚动
- GlowButton：大琥珀发光阴影 (`0px 4px 95px 4px hsl(45 70% 50% / 0.6)`)

**AgentCFO 改造：**
- 用暗绿黑替代纯黑，更有"财务"质感
- 暖金 accent 非常适合"Treasury"主题
- 大字标题可做 "AI Treasury" + "Command Center"
- GlowButton 可做 "Launch Demo" CTA

### 2.2 guardnet-landing.md ⭐⭐⭐⭐⭐

**核心视觉元素：**
- 纯黑背景 + 视频背景
- **巨型排版** (`text-[24vw] md:text-[18vw]`)
- 绝对定位的大字单词（"shelter" "user" "info"）
- 数据悬浮块（"+2.7b" "+90k" "+450k"）
- 底部渐变 fade-out
- 顶部/底部 fade overlay
- 圆角 pill 导航按钮

**AgentCFO 改造：**
- 巨型数字可做 treasury 统计（"$50M+" "100+ DAOs" "0 Breaches"）
- 数据悬浮块非常适合展示 AgentCFO 核心指标
- pill 按钮可用于导航

### 2.3 veloce-finance-landing.md ⭐⭐⭐⭐

**核心视觉元素：**
- 白色背景 + 品牌渐变 (`from-[#B56939] via-[#5C3779] to-[#454BBB]`)
- 视频背景 Hero
- **统计卡片**（大数字 + 描述 + 视频背景）
- BlurIn 滚动动画（`filter: blur(20px) → blur(0)`）
- 文字填充滚动动画（clip-path 渐变 reveal）
- 多字体系统（Manrope, Helvetica, Inter, Product Sans, SF Compact）

**AgentCFO 改造：**
- 统计卡片结构可直接用于 Landing 功能展示
- BlurIn 动画可用于元素入场
- 文字填充动画可用于 slogan 展示
- **但**：品牌渐变偏紫，需要调整为更商务的配色

### 2.4 finlytic-hero.md ⭐⭐⭐⭐

**核心视觉元素：**
- 纯黑背景 + 背景视频
- 模糊药丸背景（`blur: 77.5px` 的黑色 pill）
- 多字体标题（Inter + Instrument Serif italic）
- 双 CTA 按钮（主按钮 + 次要按钮）
- Dashboard 截图 glassmorphism 容器
- Manrope 导航字体

**AgentCFO 改造：**
- 模糊药丸背景非常适合做 Hero 内容区背景
- 多字体标题可做 "AgentCFO" + "/ DAO AI 财务官"
- glassmorphism 容器可做 Demo 预览图框

### 2.5 Web3 EOS Hero.md ⭐⭐⭐⭐

**核心视觉元素：**
- 纯黑 + 全屏视频 + 50% 黑色覆盖
- 渐变文字效果（`background-clip: text`）
- 分层 pill 按钮（外边框 + 内按钮 + 顶部光晕）
- 小型 badge pill（圆点 + 文字）
- 响应式大字标题

**AgentCFO 改造：**
- 渐变文字可用于主标题
- 分层 pill 按钮非常精致，可用于 CTA
- badge pill 可用于状态标签（"Hackathon Demo"）

### 2.6 crypto-wealth-hero.md ⭐⭐⭐

**核心视觉元素：**
- 滚动联动视频缩放（`scale = 1 + scrollProgress * 0.3`）
- 弹出卡片动画（stagger 150ms）
- 渐变边框按钮（mask trick）
- 旋转 SVG 动画

**AgentCFO 改造：**
- 滚动联动效果较复杂，优先级低
- 弹出卡片可用于 Landing 功能列表
- 渐变边框按钮精致但过于花哨

### 2.7 Datacore SaaS Hero.md ⭐⭐⭐⭐

**核心视觉元素：**
- "Linear-style" 暗色美学
- HLS 视频流背景
- Glassmorphism pill badge（橙色 "New" 标签）
- 多字体系统（Manrope, Inter, Cabin, Instrument Serif）
- 紫色主按钮 + 深蓝次要按钮
- 全屏移动端菜单

**AgentCFO 改造：**
- Linear 风格非常适合 AI 产品
- Glassmorphism badge 可用于版本/状态标签
- 多字体系统可参考（但控制在 2-3 种）

---

## 3. 三个新视觉方向 Brief

### 3.1 Direction A: Conservative Business Brief

> **保守商务简报风**

**定位**: 最安全的方向，保持当前白底设计，只做精致化提升。

**色彩**:
- 背景: `#ffffff` / `#f8fafc` (slate-50)
- 主文字: `#0f172a` (slate-900)
- 强调色: `#2563eb` (blue-600) → 保持当前蓝色
- 成功: `#059669` (emerald-600)
- 警告: `#d97706` (amber-600)
- 危险: `#dc2626` (red-600)

**字体**: Inter / system-ui

**特点**:
- 白底 + 浅灰卡片 + 蓝色强调
- 清晰的信息层级
- 克制的阴影和圆角
- 无背景视频，无复杂动效
- 类似: Notion, Linear (light mode), Vercel Dashboard

**适合场景**: 评委中的传统投资人、商务导向的 hackathon

**风险**: 太平庸，不够"hackathon 惊艳"

---

### 3.2 Direction B: AI Treasury Command Center ⭐ 推荐

> **AI 财务指挥中心**

**定位**: 暗色专业控制台，强调"Command Center"感。

**色彩**:
- 背景: `#0a0a0a` / `#0c0f0a` (orbit-web3 的深暗绿黑)
- 主文字: `#e7e5e4` (warm off-white)
- 强调色: `#f59e0b` (amber-500) → "Treasury Gold"
- 辅助色: `#3b82f6` (blue-500) → "Agent Blue"
- 成功: `#10b981` (emerald-500)
- 警告: `#f59e0b` (amber-500)
- 危险: `#ef4444` (red-500)
- 卡片背景: `#171717` / `rgba(255,255,255,0.03)`
- 边框: `rgba(255,255,255,0.08)`

**字体**:
- 标题: Inter + Instrument Serif (italic accent)
- 正文: Manrope / Inter
- 数据: JetBrains Mono / SF Mono（等宽字体显示金额）

**特点**:
- 暗色主调 + 琥珀金强调 = "Treasury" 感
- 背景 subtle 网格线条（参考 Aceternity Background）
- 数据密度高，信息层级清晰
- 卡片带微弱边框 + 玻璃质感
- KPI 数字大字号 + 等宽字体
- 类似: Bloomberg Terminal, TradingView, Raycast, Warp

**适合场景**: 技术型评委、Web3 原生观众、Cobo 赛道

**风险**: 暗色主题在投影/录屏时可能对比度不足

---

### 3.3 Direction C: Premium Web3 Finance Demo

> **高端 Web3 财务演示**

**定位**: 暗色 + 视频背景 + 大排版，强调"Premium"和"Demo"感。

**色彩**:
- 背景: `#000000` (纯黑)
- 主文字: `#ffffff`
- 强调色: `#f59e0b` (amber-500) + `#7b39fc` (purple) → 双强调
- 辅助渐变: `linear-gradient(135deg, #f59e0b, #7b39fc)`
- 卡片: `rgba(255,255,255,0.05)` + glassmorphism

**字体**:
- 标题: General Sans / Instrument Serif
- 正文: Inter / Manrope
- 数字: SF Mono

**特点**:
- 全屏背景视频（ subtle 抽象粒子/数据流）
- 巨型排版（guardnet 风格）
- glassmorphism 卡片和按钮
- 渐变文字效果
- 数据悬浮块
- 类似: MotionSites 生成的顶级落地页、Apple 发布会

**适合场景**: 视觉冲击优先、需要"哇"效果的 demo

**风险**: 过于花哨，可能削弱"商务可信"感；视频背景增加加载时间

---

## 4. 最终推荐

**推荐 Direction B: AI Treasury Command Center**

理由：
1. **暗色主题** 是 2024-2025 AI 产品的默认高级感（ChatGPT, Claude, Vercel v0, Raycast）
2. **琥珀金强调** 直接关联"Treasury/Finance"语义，比蓝色更有区分度
3. **高数据密度** 符合"Command Center"定位，评委能一眼看到"这不是普通 CRUD"
4. **Aceternity + HeroUI 资产都能适配暗色**，技术实现路径清晰
5. **不过分花哨**，保持商务可信感，同时有足够视觉冲击力
6. **Cobo 赛道契合度高**，Agentic Wallet / Treasury 暗色控制台是行业共识

**次选**: Direction A（如果时间极度紧张，只做精致化不做主题切换）

**备选**: Direction C（如果评委明确喜欢视觉冲击，可在 Sprint 3 叠加视频背景）
