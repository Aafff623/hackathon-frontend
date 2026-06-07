# Design System

## 设计原则

- 以 HeroUI v3 design tokens 为基础
- 不硬编码大量颜色
- 不与 shadcn theme config 混用

## 资产分层（L0→L6）

```txt
Mkdirs(业务) → MotionSites(灵感) → taste/frontend-design(判断)
→ Aceternity(动效) → HeroUI v3(组件) → Claude Code(执行) → Codex/screenshots(审查)
```

## 动效优先级

1. CSS transition — 简单 hover/color/opacity
2. Framer Motion — 默认主动效层
3. GSAP — 复杂 timeline/ScrollTrigger
4. 不碰 Three.js / R3F

## 组件分层

| 层 | 来源 | 用途 |
|---|---|---|
| 产品级 | HeroUI Pro | Dashboard / Form / Card / Modal / Table / Badge / Status / KPI / DataGrid / Sheet / Command / Audit Report |
| 视觉增强 | Aceternity | Landing / Hero / 动态背景 / Agent workflow 动效 |
| 灵感 | MotionSites | 视觉 prompt、Hero 文案、动效语言 |
| 结构参考 | Mkdirs | 目录结构、Vercel 部署、开源模板完整度 |
