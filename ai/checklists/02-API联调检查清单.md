# API 联调检查清单

## 环境

- [ ] 后端服务可访问
- [ ] CORS 配置正确
- [ ] 测试网可用

## 接口

- [ ] GET /api/payment-plans
- [ ] GET /api/payment-plans/:id
- [ ] POST /api/payment-plans/:id/approve
- [ ] POST /api/caw/execute
- [ ] GET /api/caw/status/:txHash

## 数据一致性

- [ ] ContributionRecord 与 PaymentPlan 金额一致
- [ ] BudgetRule 与 RiskCheck 逻辑一致
- [ ] CAWExecution 与 PaymentPlan 项目对应
- [ ] AuditReport 汇总正确

## 错误处理

- [ ] 网络错误有提示
- [ ] API 错误有提示
- [ ] 超时处理
