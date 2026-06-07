# 组件使用规则

## HeroUI Pro

- 用于 Demo Console 产品级组件
- 适合 Payment Plan、Risk Check、CAW Execution、Audit Report、KPI、DataGrid、Sheet、Command
- 使用 compound API（如 `Sheet.Trigger`, `Sheet.Content`）
- 复杂组件必须保证 aria-label / textValue / getRowId 等字段
- 使用 design tokens，不硬编码大量颜色
- 不与 shadcn theme config 混用

### DataGrid

- 必须有 `aria-label`
- columns 每列必须有 `id`
- 使用 `accessorKey` 映射字段
- 必须有 `getRowId`
- loading / empty / error 状态必须设计
- row selection / sorting / pagination 后续接入时需写清状态来源

### Kanban

- `Kanban.Card` 必须通过 `Kanban.CardList` render prop 渲染
- Card 必须有 `id`
- Card 必须有 `textValue`
- CardList 必须有 `aria-label`
- 不要直接 `Array.map` 渲染 Card

### Sheet

- 用于 approval / payment detail / audit detail 等确认型交互
- 必须有明确关闭路径
- 不能隐藏关键风险信息

### Command

- 用于后续快捷操作，不作为 MVP 必需
- `Command.Item` 需要 `textValue`
- 搜索行为和快捷键后续再接

### 通用状态

所有复杂展示组件必须设计：
- loading
- empty
- error
- success
- blocked
- pending approval

## Aceternity

- 用于 Landing、Hero、动态背景、Agent workflow 的视觉增强
- 只选择性复制组件
- 必须记录来源模板、复制文件、依赖、修改点
- 复制后放入业务域组件或 assets/aceternity-selected 记录，不要污染根目录

## MotionSites

- 用于视觉 prompt、Hero 文案、动效语言
- 不作为组件库

## Mkdirs

- 用于参考目录结构、Vercel 部署、开源模板完整度
- 不引入 Sanity/Auth/Stripe/Resend 到 AgentCFO MVP
