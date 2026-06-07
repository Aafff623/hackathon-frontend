# Demo Flow

## 完整流程

```txt
贡献记录 / 订阅账单输入
→ AgentCFO 解析任务
→ 生成 Payment Plan
→ Risk Check：预算 / 白名单 / 单笔限额 / 重复付款
→ Human Approval
→ Cobo Agentic Wallet 执行付款
→ 展示 tx hash / Agent Wallet / Payment Status
→ 生成 Audit Report
```

## Mock 数据覆盖

### 贡献者

- Alice: 20 USDC，内容贡献 ✅
- Bob: 15 USDC，设计贡献，钱包不在白名单 ❌
- Charlie: 10 USDC，社群运营贡献 ✅

### 订阅账单

- Data API: 5 USDC ✅

### 预算规则

- monthlyBudget: 50 USDC
- singlePaymentLimit: 25 USDC
- allowedToken: USDC
- requiresHumanApproval: true
- whitelist: 不包含 Bob

### Risk Check 结果

- Budget: ✅ 通过（总计 50 USDC）
- Whitelist: ❌ 不通过（Bob 被拦截）
- Limit: ✅ 通过（单笔均未超过 25 USDC）
- Duplicate: ✅ 通过

### Payment Plan 状态流

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

### CAW Execution

- Agent Wallet: 0xAgentWalletPlaceholder
- Testnet: Base Sepolia
- 成功交易：Alice 20 USDC、Charlie 10 USDC、Data API 5 USDC
- Bob 被拦截，无交易
