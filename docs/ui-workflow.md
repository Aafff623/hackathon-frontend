# UI Workflow

## 资产分层（L0→L6）

```txt
Mkdirs(业务) → MotionSites(灵感) → taste/frontend-design(判断)
→ Aceternity(动效) → HeroUI v3(组件) → Claude Code(执行) → Codex/screenshots(审查)
```

## 落地顺序

1. 业务底盘跑通
2. 选视觉方向
3. 沉淀 DESIGN.md
4. 小范围移植 Aceternity/MotionSites
5. HeroUI 补交互组件
6. Claude Code 执行
7. screenshots + git diff
8. Codex review
9. GPT 综合

## 动效选择

| 场景 | 技术 |
|---|---|
| 简单 hover/color/opacity | CSS transition |
| 默认主动效 | Framer Motion |
| 复杂 timeline/ScrollTrigger | GSAP |
| Three.js / R3F | 不碰 |
