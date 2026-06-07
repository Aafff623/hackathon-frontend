# Integration Checklist

## 前端 ↔ 后端 API

- [ ] `GET /api/payment-plans` 返回格式正确
- [ ] `GET /api/payment-plans/:id` 返回格式正确
- [ ] `POST /api/payment-plans/:id/approve` 状态流转正确
- [ ] `POST /api/caw/execute` 返回 CAWExecution 数组
- [ ] `GET /api/caw/status/:txHash` 返回最新状态
- [ ] CORS 配置正确
- [ ] 错误处理一致

## 前端 ↔ CAW 合约

- [ ] Agent Wallet Address 可展示
- [ ] tx hash 可跳转区块链浏览器
- [ ] Payment Status 实时更新
- [ ] 失败交易有错误原因
- [ ] 权限边界描述准确

## 数据一致性

- [ ] ContributionRecord 与 PaymentPlan 金额一致
- [ ] BudgetRule 与 RiskCheck 逻辑一致
- [ ] CAWExecution 与 PaymentPlan 项目对应
- [ ] AuditReport 汇总正确

## 环境

- [ ] 测试网可用（Base Sepolia）
- [ ] Agent Wallet 有余额
- [ ] 白名单配置正确
- [ ] 预算规则配置正确
