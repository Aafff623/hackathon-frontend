# mkdirs-template 扫描报告

> **扫描路径**: `D:\OneDrive\Desktop\threetwoa\ui-component\mkdirs-template`
> **扫描范围**: 源码结构、页面、组件、配置
> **日期**: 2026-06-08

---

## 1. 项目定位

Mkdirs Template 是一个 **AI 驱动的目录站/资源站全栈模板**，由 Fox（MkSaaS/Mkdirs 创始人）开发。它不是 UI 组件库，而是**完整的 SaaS 全栈工程参考**。

核心能力：
- AI 内容抓取
- CMS 后台（Sanity）
- 支付系统（Stripe）
- 用户认证（Next Auth）
- SEO 优化
- 邮件系统（Resend + React Email）

---

## 2. 可借鉴的页面结构

### 2.1 公开页面 (public)

| 页面 | 路由 | 可借鉴点 |
|---|---|---|
| 首页 | `/` | **3 套首页变体可选，Hero + 分类 + 搜索** |
| 分类页 | `/category/[slug]` | 分类浏览结构 |
| 搜索页 | `/search` | 全文搜索 + 筛选布局 |
| 产品详情 | `/item/[slug]` | 详情页信息架构 |
| 定价页 | `/pricing` | 定价方案展示 |
| 博客列表 | `/blog` | CMS 内容列表 |
| 博客详情 | `/blog/[slug]` | 文章页布局 |

### 2.2 认证页面 (auth)

| 页面 | 路由 | 可借鉴点 |
|---|---|---|
| 登录 | `/auth/login` | 表单布局 |
| 注册 | `/auth/register` | 表单布局 |
| 验证 | `/auth/new-verification` | 状态反馈 |

### 2.3 需登录页面 (protected) ⭐

| 页面 | 路由 | 可借鉴点 |
|---|---|---|
| **Dashboard** | `/dashboard` | **用户管理后台布局** |
| 设置 | `/settings` | 设置页表单组织 |
| 编辑产品 | `/edit/[id]` | 编辑表单布局 |

---

## 3. Landing / Dashboard / Card Pattern

### 3.1 Landing Pattern

Mkdirs 提供 **3 套首页变体**：

```
src/components/home/     # 经典目录站风格
src/components/home2/    # 现代卡片风格
src/components/home3/    # 简约列表风格
```

**对 AgentCFO 的借鉴：**
- `home-hero.tsx` → Landing 页 Hero 结构参考
- `home-search-box.tsx` → 搜索框样式（如需要全局搜索）
- `home-category-list.tsx` → 分类网格布局（可改造为功能网格）
- `home-content.tsx` → 内容区块组织方式

### 3.2 Dashboard Pattern ⭐⭐⭐

```
src/components/dashboard/
  ├── dashboard-sidebar.tsx    → 侧边栏导航
  ├── dashboard-stats.tsx      → 统计卡片
  └── dashboard-items.tsx      → 数据列表
```

**对 AgentCFO 的借鉴：**
- `dashboard-sidebar.tsx` → Demo Console 侧边栏导航结构
- `dashboard-stats.tsx` → Audit Report 顶部统计卡片布局
- `dashboard-items.tsx` → Payment Plan / Execution 列表布局

### 3.3 Card Pattern

Mkdirs 使用 shadcn/ui 的 `Card` 组件，结构规范：

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
  <CardFooter>
    {/* Actions */}
  </CardFooter>
</Card>
```

**对 AgentCFO 的借鉴：**
- 当前 AgentCFO 的卡片是手写的 `section` + `div`，可升级为 shadcn/ui Card 结构
- `CardHeader` / `CardTitle` / `CardDescription` 的层级更清晰

---

## 4. 哪些东西不应引入

| 技术 | 原因 |
|---|---|
| **Sanity CMS** | AgentCFO 是 Demo Console，不需要 CMS |
| **Next Auth** | 当前是 Mock Demo，不需要认证 |
| **Stripe** | 不是商业化产品，不需要支付 |
| **Resend + React Email** | 不需要邮件系统 |
| **AI SDK (OpenAI/Google)** | 不需要 AI 内容抓取 |
| **scripts/** 批量脚本 | 与 AgentCFO 无关 |
| **emails/** 邮件模板 | 与 AgentCFO 无关 |

**原则**: 只借鉴 UI 结构和样式，不引入任何后端/服务依赖。

---

## 5. 对 AgentCFO 首页和 Demo 页面可借鉴的 Layout

### 5.1 首页 `/` 可借鉴

```
mkdirs 首页结构:
  Navbar
    → Logo + 导航链接 + 用户按钮
  Hero
    → 大标题 + 副标题 + 搜索框/CTA
  Category List
    → 分类网格卡片
  Content Grid
    → 内容卡片网格
  Footer

AgentCFO 改造:
  Navbar
    → Logo + "Demo" 链接
  Hero
    → "AgentCFO / DAO AI 财务官" + 副标题 + "View Demo Console" CTA
  Features Grid (Bento)
    → 6 大功能卡片
  Ecosystem Marquee
    → Logo 无限滚动
  Footer
```

### 5.2 Demo 页面 `/demo` 可借鉴

```
mkdirs Dashboard 结构:
  Sidebar
    → 导航项 + 折叠
  Main Content
    → Stats Cards (grid)
    → Data Table
    → Recent Activity

AgentCFO 改造:
  Sidebar (或 Top Nav)
    → Workflow / Payment / Risk / Approval / Execution / Audit
  Main Content
    → KPI Strip (参考 dashboard-stats)
    → Payment Plan Board (参考 dashboard-items)
    → Risk Gate (参考 stats cards)
    → Human Approval (参考 list)
    → Execution Result (参考 activity)
    → Audit Report (参考 summary)
```

---

## 6. 是否值得复制代码，还是只参考结构

| 内容 | 建议 |
|---|---|
| 整体项目结构 | **只参考**，不复制。Mkdirs 是 Next.js 14 + Tailwind 3，AgentCFO 是 Next.js 16 + Tailwind 4 |
| shadcn/ui 组件用法 | **参考结构**。当前 AgentCFO 未使用 shadcn/ui，但可参考其 Card/Table/Button 的组织方式 |
| Dashboard 布局 | **参考结构**。sidebar + main content 的布局模式值得借鉴 |
| 首页变体 | **参考结构**。3 套变体的信息组织方式可参考 |
| 表单组件 | **不复制**。AgentCFO 当前没有复杂表单需求 |
| 邮件模板 | **不复制**。完全无关 |

---

## 7. 架构/设计说明

Mkdirs 的 README 和文档中有以下值得借鉴的工程实践：

### 7.1 路由组织

```
src/app/
  ├── (website)/          # 网站主路由组
  │   ├── (public)/       # 公开页面
  │   ├── (protected)/    # 需登录页面
  │   └── auth/           # 认证页面
  └── (sanity)/           # CMS 路由组
```

**借鉴**: AgentCFO 未来如有 Landing + Demo + Docs 多页面，可参考路由分组。

### 7.2 组件组织

```
src/components/
  ├── ui/                 # 基础组件（43 个 shadcn/ui）
  ├── layout/             # 布局组件
  ├── home/               # 首页业务组件
  ├── dashboard/          # Dashboard 业务组件
  └── shared/             # 共享业务组件
```

**借鉴**: AgentCFO 当前的 `components/` 已按业务域拆分（agent/approval/audit/...），与 mkdirs 模式一致，继续保持。

### 7.3 Tailwind 配置

- CSS 变量驱动颜色系统（HSL）
- 支持明暗模式
- 标准断点
- 自定义动画（fade-up, fade-down, fade-in, fade-out）

**借鉴**: AgentCFO 当前 globals.css 几乎为空，可参考建立 Design Tokens。

---

## 8. 关键文件路径

| 用途 | 路径 |
|---|---|
| 首页变体 1 | `src/components/home/` |
| 首页变体 2 | `src/components/home2/` |
| 首页变体 3 | `src/components/home3/` |
| Dashboard | `src/components/dashboard/` |
| 布局组件 | `src/components/layout/` |
| shadcn/ui 组件 | `src/components/ui/` |
| 全局样式 | `src/styles/globals.css` |
| Tailwind 配置 | `tailwind.config.ts` |
| 使用指南 | `docs/mkdirs-template-usage-guide.md` |
