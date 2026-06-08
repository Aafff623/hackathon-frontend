# Next Sprint Implementation Plan

> **日期**: 2026-06-08
> **前提**: 基于 `06-ui-upgrade-strategy.md` 的方向 B（AI Treasury Command Center）

---

## Sprint 1: Visual Structure Upgrade

### 目标
建立暗色主题基础设施 + Landing 页骨架 + Demo Console 布局骨架。让项目从"白底简单"变为"暗色专业"。

### 涉及文件

**新增文件：**
- `app/globals.css` — 重写为暗色主题 CSS 变量
- `app/layout.tsx` — 添加字体加载 + 主题属性
- `components/landing/hero-section.tsx` — 首屏 Hero
- `components/landing/feature-grid.tsx` — Bento Grid 功能展示
- `components/landing/navbar.tsx` — Landing 导航
- `components/landing/footer.tsx` — 页脚
- `components/ui/container.tsx` — 最大宽度容器
- `lib/fonts.ts` — 字体加载配置

**修改文件：**
- `app/page.tsx` — 重写为完整 Landing
- `app/demo/page.tsx` — 调整布局适配新主题
- `components/demo/demo-shell.tsx` — 适配暗色主题
- `components/workflow/workflow-timeline.tsx` — 适配暗色主题
- `components/payment/payment-plan.tsx` — 适配暗色主题
- `components/risk/risk-gate.tsx` — 适配暗色主题
- `components/approval/human-approval.tsx` — 适配暗色主题
- `components/execution/execution-result.tsx` — 适配暗色主题
- `components/audit/audit-report.tsx` — 适配暗色主题

**可选新增：**
- `components/landing/background-grid.tsx` — 网格背景动画（SVG/CSS）
- `components/ui/button.tsx` — 统一按钮组件

### 具体改动

1. **全局主题**
   - 在 `globals.css` 定义暗色 CSS 变量（背景、文字、强调色、状态色、边框）
   - 设置 `color-scheme: dark`
   - 配置 `Inter` + `Instrument Serif` + `JetBrains Mono` 字体

2. **Landing 页重写**
   - 暗色背景 + subtle 网格动画
   - Hero: Badge + 大标题 + 副标题 + CTA + 产品截图占位
   - Stats Marquee: 4 个数据悬浮（横向滚动）
   - Features Bento Grid: 6 格功能展示
   - CTA Section + Footer

3. **Demo Console 适配**
   - 所有组件从 `bg-white` / `bg-slate-50` 改为 `bg-[#0a0a0a]` / `bg-[#171717]`
   - 所有文字从 `text-slate-900` 改为 `text-[#e7e5e4]`
   - 所有边框从 `border-slate-200` 改为 `border-white/10`
   - 状态色适配暗色（emerald-500 / amber-500 / red-500）

### 使用哪些资产

- Aceternity: `ai-saas-template` 的 Hero 结构、Background 网格、Button 变体
- MotionSites: `orbit-web3-hero` 的暗色 + 暖金方向
- 当前代码: 保留所有数据和逻辑，只改样式

### 不使用哪些资产

- HeroUI Pro（本轮不接入，只准备主题变量）
- Framer Motion（本轮只做 CSS transition）
- 背景视频（静态背景优先）

### 验收标准

- [ ] `/` 首页为暗色 Landing，有 Hero + Features + CTA + Footer
- [ ] `/demo` 为暗色 Demo Console，所有 6 个区块正常显示
- [ ] 无样式断裂，无对比度问题
- [ ] `pnpm typecheck` 通过
- [ ] `pnpm build` 通过
- [ ] 移动端基本可读

### 风险

| 风险 | 概率 | 缓解 |
|---|---|---|
| 暗色适配遗漏某些组件 | 中 | 逐组件检查，使用全局搜索替换 |
| 字体加载失败 | 低 | 使用 `next/font` 本地加载 |
| 移动端布局问题 | 中 | 每个组件添加 responsive 测试 |

### 预计耗时

**2-3 小时**（纯样式修改，无新依赖）

---

## Sprint 2: Asset-Inspired Component Upgrade

### 目标
接入 HeroUI Pro + 升级核心组件 + Landing 精致化。让项目从"暗色骨架"变为"产品级控制台"。

### 涉及文件

**新增文件：**
- `components/demo/kpi-strip.tsx` — Dashboard 顶部 4 格 KPI
- `components/landing/logo-marquee.tsx` — 生态 Logo 无限滚动
- `components/landing/cta-section.tsx` — CTA 区块
- `components/ui/glass-card.tsx` — 玻璃质感卡片（可选）

**修改文件：**
- `components/demo/demo-shell.tsx` — 升级为 AppLayout 或自定义 Sidebar 布局
- `app/demo/page.tsx` — 2 列网格布局
- `components/payment/payment-plan.tsx` — 升级为 DataGrid 或精致卡片列表
- `components/risk/risk-gate.tsx` — 增加 KPI 概览
- `components/audit/audit-report.tsx` — 增加 KPI 大数字
- `app/page.tsx` — 添加 Marquee + CTA

**配置变更：**
- `globals.css` — 添加 HeroUI Pro CSS 导入
- `package.json` — 添加 `@heroui-pro/react` 依赖（通过 hpsetup）

### 具体改动

1. **接入 HeroUI Pro**
   - 运行 `hpsetup` 激活 Pro 包
   - 确认 `globals.css` 导入顺序正确
   - 测试 `KPI` 组件渲染

2. **Dashboard 布局升级**
   - DemoShell 增加 Sidebar 导航（或顶部 Tab 导航）
   - 顶部增加 KPI Strip（4 格：Total/Approved/Blocked/Executed）
   - Main Content 改为 2 列网格

3. **Payment Plan Board 升级**
   - 尝试接入 HeroUI Pro `DataGrid`
   - 如 DataGrid 太重，改用 `ItemCardGroup` 或精致自定义卡片
   - 顶部增加汇总 KPI

4. **Risk Gate 升级**
   - 接入 `Widget` 容器
   - 增加 `RadialChart` 仪表盘（预算使用率）
   - 检查项列表用 `ItemCard`

5. **Audit Report 升级**
   - 统计数字改用 `KPI` + `NumberValue`
   - 增加 `AreaChart` 趋势图（Sprint 2.5 可选）

6. **Landing 精致化**
   - 添加 `InfiniteMovingCards` Logo Marquee
   - 添加 CTA Section
   - Hero 添加 subtle 动画（CSS transition）

### 使用哪些资产

- HeroUI Pro: `AppLayout`, `KPI`, `KPIGroup`, `DataGrid`, `Widget`, `RadialChart`, `Badge`, `ItemCard`
- Aceternity: `InfiniteMovingCards`, `Features` (Bento Grid 结构参考)
- MotionSites: `veloce-finance` 统计卡片结构

### 不使用哪些资产

- HeroUI Pro `Kanban`（无拖拽需求）
- HeroUI Pro `Carousel`（不需要轮播）
- Aceternity `SparklesCore`（太花哨）
- 背景视频（性能考虑，放到 Sprint 3）

### 验收标准

- [ ] HeroUI Pro 组件成功渲染
- [ ] Dashboard 有 KPI Strip + 2 列布局
- [ ] Payment Plan 展示更专业（表格或精致卡片）
- [ ] Risk Gate 有仪表盘或 KPI 概览
- [ ] Audit Report 有大数字统计
- [ ] Landing 有 Logo Marquee + CTA
- [ ] `pnpm typecheck` 通过
- [ ] `pnpm build` 通过

### 风险

| 风险 | 概率 | 缓解 |
|---|---|---|
| hpsetup 失败 / HP Key 无效 | 中 | 提前确认 HP Key；失败则回退到 Sprint 1 的自定义组件 |
| HeroUI Pro 与 Tailwind v4 兼容问题 | 低 | 已确认支持，但需测试 |
| DataGrid 太重/太复杂 | 中 | 有回退方案：自定义卡片列表 |
| 构建体积增大 | 低 | Pro 组件支持 tree-shaking |

### 预计耗时

**4-6 小时**（含 HeroUI 接入调试）

---

## Sprint 3: Motion / Recording Polish

### 目标
添加 subtle 动效 + 录屏准备 + 最终抛光。让项目"活"起来，为 hackathon 演示做准备。

### 涉及文件

**新增文件：**
- `hooks/use-scroll-animation.ts` — 滚动动画 hook
- `components/ui/fade-in.tsx` — 通用淡入动画包装器
- `components/landing/video-background.tsx` — 背景视频（可选）

**修改文件：**
- `components/landing/hero-section.tsx` — 添加入场动画
- `components/landing/feature-grid.tsx` — 添加 stagger 入场动画
- `components/workflow/workflow-timeline.tsx` — 添加步骤完成动画
- `components/payment/payment-plan.tsx` — 添加列表 stagger 动画
- `components/audit/audit-report.tsx` — 添加数字 count-up 动画
- `app/demo/page.tsx` — 优化信息密度和布局

### 具体改动

1. **Landing 动效**
   - Hero 元素 stagger 入场（Framer Motion）
   - Features Bento Grid 滚动触发入场
   - Logo Marquee 无限滚动动画
   - CTA Button hover glow 效果

2. **Demo Console 动效**
   - Workflow Timeline 步骤完成动画
   - Payment Plan 列表 stagger 入场
   - Risk Gate 检查项依次出现
   - Audit Report 数字 count-up

3. **录屏准备**
   - 确保所有数据状态一致
   - Mock 标注清晰但不突兀
   - 确保暗色主题在录屏中对比度足够
   - 准备演示脚本（7 步骤 story）

4. **可选增强**
   - 背景视频（如性能允许）
   - 打印样式（Audit Report）
   - SEO meta 标签优化
   - Open Graph 图片

### 使用哪些资产

- Framer Motion: `motion.div`, `AnimatePresence`, `useInView`
- Aceternity: `ContainerScroll`（产品截图展示，可选）
- MotionSites: `finlytic-hero`（背景视频方向，可选）

### 不使用哪些资产

- GSAP（不需要复杂 timeline）
- Three.js / R3F（明确禁止）
- Sparkles / 粒子效果（太花哨）

### 验收标准

- [ ] Landing 页动效流畅，无卡顿
- [ ] Demo Console 动效 subtle，不干扰数据阅读
- [ ] 录屏 1080p 下所有文字清晰可读
- [ ] 移动端无严重布局问题
- [ ] `pnpm typecheck` 通过
- [ ] `pnpm build` 通过
- [ ] Lighthouse 性能评分 ≥ 70

### 风险

| 风险 | 概率 | 缓解 |
|---|---|---|
| Framer Motion 导致性能问题 | 中 | 只在关键元素使用，避免大量同时动画 |
| 录屏暗色对比度不足 | 中 | 提前测试录屏，调整亮度 |
| 动画与 HeroUI Pro 冲突 | 低 | 分别测试 |

### 预计耗时

**3-4 小时**

---

## 推荐立即执行的 Sprint

**Sprint 1: Visual Structure Upgrade**

理由：
1. 不需要安装依赖，纯样式修改
2. 风险最低，可快速验证暗色主题效果
3. 为 Sprint 2 的 HeroUI 接入做好准备
4. 即使后续 Sprint 受阻，Sprint 1 的成果已足够提升视觉质感

---

## 是否需要安装依赖

| Sprint | 依赖 | 说明 |
|---|---|---|
| Sprint 1 | 否 | 纯样式修改，使用 Tailwind CSS |
| Sprint 2 | **是** | `framer-motion` + `lucide-react` + HeroUI Pro（hpsetup）|
| Sprint 3 | 否 | 使用 Sprint 2 已安装的依赖 |

### Sprint 2 依赖安装命令

```bash
# 1. 基础依赖
pnpm add framer-motion lucide-react

# 2. HeroUI Pro（需要 HP Key）
npx -y hpsetup@latest hp_xxxxxxxx

# 3. 确认 globals.css 导入顺序
# @import "tailwindcss";
# @import "@heroui/styles";
# @import "@heroui-pro/react/css";
```

---

## 是否需要 HeroUI

**是，但分阶段：**

- Sprint 1: 不需要，准备主题变量
- Sprint 2: **需要**，接入 `KPI`, `AppLayout`, `DataGrid`, `Widget`, `RadialChart`
- Sprint 3: 不需要新增，使用已接入的组件

**前提**: 需要有效的 HP Key 运行 hpsetup。

**回退方案**: 如果 hpsetup 失败，使用 shadcn/ui 或纯 Tailwind 自定义组件替代。

---

## 是否需要复制 Aceternity 组件

**是，分阶段：**

- Sprint 1: 复制 `NavBar`, `Hero`, `Background`, `Button`, `Footer` 结构（手写实现，不复制文件）
- Sprint 2: 复制 `InfiniteMovingCards` 结构（手写实现）
- Sprint 3: 可选复制 `ContainerScroll`（手写实现）

**注意**: 不直接复制 Aceternity 文件到项目（避免依赖膨胀），而是参考其结构和样式，用 Tailwind + Framer Motion 手写实现。

---

## 是否建议使用 MotionSites prompt 做视觉生成

**Sprint 3 可选使用：**

- 使用 `orbit-web3-hero` 或 `finlytic-hero` 的 prompt 生成 Hero 背景图/视频
- 或使用 Replicate/其他工具生成暗色抽象背景图
- **不是必须**，暗色 + 网格动画已足够

**建议**: 如果时间紧张，跳过视觉生成，专注于组件和动效。

---

## 是否建议现在录视频

**否**

理由：
1. 当前视觉尚未升级，录屏效果平庸
2. Sprint 1 完成后视觉有基础提升，但仍缺少产品级组件
3. **建议 Sprint 2 完成后评估**，此时 Dashboard 有 KPI + 专业布局 + 精致组件
4. Sprint 3 的动效会让录屏更流畅
5. 录屏最佳时机：Sprint 2 或 Sprint 3 完成后

---

## 总时间估算

| Sprint | 耗时 | 累计 |
|---|---|---|
| Sprint 1 | 2-3 小时 | 2-3 小时 |
| Sprint 2 | 4-6 小时 | 6-9 小时 |
| Sprint 3 | 3-4 小时 | 9-13 小时 |

**建议**: 按 Sprint 1 → Sprint 2 → Sprint 3 顺序执行，每完成一个 Sprint 评估是否继续。

---

## 关键决策点

| 决策 | Sprint | 选项 |
|---|---|---|
| 是否接入 HeroUI Pro？ | Sprint 2 | A) 接入（需要 HP Key）/ B) 用 shadcn/ui 替代 / C) 纯 Tailwind |
| 是否做背景视频？ | Sprint 3 | A) 做 / B) 不做（静态背景足够）|
| 是否添加打印样式？ | Sprint 3 | A) 添加 / B) 跳过 |
| 录屏时机？ | Sprint 2/3 | Sprint 2 后评估，Sprint 3 后最佳 |
