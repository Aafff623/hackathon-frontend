# Handoff 协作规则

## 给谁

- 后端同学 / 后端 AI Agent
- 合约同学 / 合约 AI Agent
- 物料 / PPT 同学
- Demo 视频 / 路演同学

## 材料位置

| 接收方 | 路径 |
|---|---|
| 后端 | `handoff/backend/` |
| 合约 / CAW | `handoff/contract-caw/` |
| 物料 / PPT | `handoff/material-ppt/` |
| Demo 视频 | `handoff/demo-video/` |
| 联调 | `handoff/integration/` |

## 更新规则

- API 契约变更 → 更新 `handoff/backend/backend-api-contract.md`
- 字段变更 → 更新 `handoff/backend/api-fields.md`
- Mock 响应变更 → 更新 `handoff/backend/mock-response-examples.md`
- CAW 展示需求变更 → 更新 `handoff/contract-caw/caw-display-requirements.md`
- 截图更新 → 放入 `assets/screenshots/` 并更新 `handoff/demo-video/screenshot-shotlist.md`
