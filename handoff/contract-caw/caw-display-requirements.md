# CAW Display Requirements

## 前端需要展示的信息

1. **Agent Wallet Address** — 执行付款的 Agent Wallet
2. **Testnet Network** — 当前使用的测试网（Base Sepolia）
3. **Transaction Hash** — 每笔交易的 tx hash，可点击跳转区块链浏览器
4. **Payment Status** — pending / success / failed
5. **Token** — USDC
6. **Amount** — 付款金额
7. **Recipient Wallet** — 收款方钱包地址
8. **Permission Boundary** — 本次执行遵守的权限边界

## 交互需求

- tx hash 需要可点击，跳转到对应测试网的区块链浏览器
- Payment Status 需要实时更新（轮询或 WebSocket）
- 失败交易需要展示错误原因
