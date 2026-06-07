# Frontend Spec

## 技术栈

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: HeroUI v3 / HeroUI Pro
- **Animation**: Framer Motion (默认), GSAP (复杂 timeline 场景)

## 项目结构

```txt
app/            Next.js 路由
components/     业务组件（按业务域拆分）
lib/            非 UI 逻辑（api / mock / workflow / constants）
docs/           设计、架构、规范
handoff/        给后端 / 合约 / 物料 / 路演的材料
ai/             AI 记忆、Prompt、检查清单
assets/         视觉参考、截图、Logo
public/         静态资源
```

## 状态管理

- 当前阶段：React useState / useContext（MVP 阶段足够）
- 后续如需全局状态，评估 Zustand

## API 策略

**当前阶段采用 Mock-first。**

- 环境变量 `NEXT_PUBLIC_DEMO_MODE=mock` 是默认演示模式
- 真实 API 尚未接入
- `lib/api/` 当前应视为 API adapter 层，不允许组件直接 `fetch`
- 组件必须通过 adapter 获取数据（当前走 `lib/mock/`）
- 后续联调时，在 `lib/api/payment.ts`、`lib/api/caw.ts` 中接入真实 `request()`
- `lib/api/client.ts` 在 mock 模式下调用 `request()` 会抛出明确错误，防止误打真实 API

## Payment Plan 状态流

```txt
draft
→ analyzing
→ risk_checked
→ pending_approval
→ executing
→ completed
→ audit_generated
```

Bob 的 blocked payment 不进入真实 execution。

## 路由规划

| 路由 | 页面 | 状态 |
|---|---|---|
| `/` | Landing / 首页 | 占位 |
| `/demo` | Demo Console | 占位 |
| `/audit` | Audit Report | 待实现 |
| `/settings` | 配置 | 待实现 |
