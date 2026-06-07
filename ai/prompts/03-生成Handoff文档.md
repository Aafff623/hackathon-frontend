# Prompt: 生成 Handoff 文档

## 目标

更新或生成给后端 / 合约 / 物料 / 路演同学的 Handoff 材料。

## 触发条件

- API 契约变更
- 字段定义变更
- Mock 响应变更
- UI 截图更新
- Demo 脚本变更

## 执行步骤

1. 读取 handoff/README.md
2. 读取 ai/memory/04-Handoff协作规则.md
3. 判断变更类型
4. 更新对应 handoff 文件
5. 通知用户更新完成

## 文件清单

- handoff/backend/backend-api-contract.md
- handoff/backend/api-fields.md
- handoff/backend/mock-response-examples.md
- handoff/contract-caw/caw-display-requirements.md
- handoff/contract-caw/transaction-proof-fields.md
- handoff/material-ppt/ppt-outline.md
- handoff/demo-video/screenshot-shotlist.md
- handoff/integration/integration-checklist.md
