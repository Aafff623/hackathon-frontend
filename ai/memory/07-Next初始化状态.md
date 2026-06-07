# Next.js 初始化状态

## 本轮完成（2026-06-07，Plan B 手动初始化）

将前端工作区从「仅骨架」升级为「可运行的 Next.js App Router 项目」。

- 手动补齐 Next.js / TypeScript / Tailwind CSS v4 最小可运行配置
- 未使用 `create-next-app`
- 保留所有现有业务文件，未重写 `app/page.tsx` / `app/demo/page.tsx`

## 包管理器

`pnpm` 10.33.0（Node v24.14.0）

## 创建/修改的文件

| 文件 | 操作 | 说明 |
|---|---|---|
| `package.json` | 新建 | scripts: dev / build / start / typecheck |
| `pnpm-lock.yaml` | 新建 | 锁文件 |
| `tsconfig.json` | 新建 | strict: true，路径别名 `@/*`（next build 自动补 jsx: react-jsx 等） |
| `next.config.ts` | 新建 | 最小配置 |
| `postcss.config.mjs` | 新建 | 使用 `@tailwindcss/postcss` |
| `app/layout.tsx` | 新建 | RootLayout + metadata + globals.css |
| `app/globals.css` | 新建 | `@import "tailwindcss"` + 基础样式 |
| `.gitignore` | 新建 | 排除 node_modules / .next / .env*.local（手动初始化必需） |
| `README.md` | 修改 | 更新运行方式与状态 |
| `CLAUDE.md` | 修改 | 更新当前状态 |
| `ai/checklists/01-前端阶段任务清单.md` | 修改 | 标记 Next.js 初始化完成 |

## 实际安装版本

运行依赖：
- next 16.2.7
- react 19.2.7
- react-dom 19.2.7

开发依赖：
- typescript 6.0.3
- @types/node 25.9.2
- @types/react 19.2.17
- @types/react-dom 19.2.3
- tailwindcss 4.3.0
- @tailwindcss/postcss 4.3.0
- postcss 8.5.15

## 验证结果

| 命令 | 结果 |
|---|---|
| `pnpm typecheck` | ✅ 通过（无类型错误） |
| `pnpm build` | ✅ 通过（路由 `/`、`/demo`、`/_not-found` 均 static 预渲染） |
| `pnpm dev` | ✅ 启动成功（Ready in 555ms），`http://localhost:3000` 与 `/demo` 均返回 HTTP 200，确认后已停止 |

## 未完成事项

- 未安装 HeroUI Pro
- 未运行 `hpsetup`
- 未配置 `hpmcp`
- 未安装 Aceternity
- 未引入 shadcn/ui
- 未配置 ESLint / Prettier
- 未实现正式 UI
- 未接真实后端 API
- 未接真实 Cobo Agentic Wallet

## 下一步建议

1. 确认是否安装 HeroUI Pro（需 HEROUI_KEY，先 baseline commit + dry-run）
2. 沉淀 DESIGN.md，确定视觉方向
3. 进入 Mock-first Demo Console 实现（组件通过 lib/api adapter 读 mock，不直接 fetch）
