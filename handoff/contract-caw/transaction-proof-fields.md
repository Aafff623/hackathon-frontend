# Transaction Proof Fields

## 展示字段

| 字段 | 类型 | 来源 | 说明 |
|---|---|---|---|
| transactionHash | string | CAW 返回 | 链上交易哈希 |
| agentWalletAddress | string | CAW 配置 | Agent Wallet 地址 |
| recipientWallet | string | Payment Plan | 收款方地址 |
| amount | number | Payment Plan | 付款金额 |
| token | string | Payment Plan / Budget Rule | 代币符号 |
| testnetName | string | 环境配置 | 测试网名称 |
| paymentStatus | string | CAW 返回 | 交易状态 |
| permissionBoundary | string | 系统生成 | 权限边界描述 |
| timestamp | string (ISO) | 系统生成 | 执行时间 |

## Mock 交易记录

### Alice — Ready / Executed

| 字段 | 值 |
|---|---|
| transactionHash | `0xMockTxAlice1234567890abcdef` |
| recipientWallet | `0xAliceWalletAddress` |
| amount | 20 |
| token | USDC |
| paymentStatus | success |

### Bob — Blocked

| 字段 | 值 |
|---|---|
| recipientWallet | `0xBobWalletAddress` |
| amount | 15 |
| token | USDC |
| paymentStatus | blocked |
| blockedReason | wallet not in whitelist |

> Bob 的付款在 Risk Check 阶段被拦截，不进入 CAW Execution，无 transactionHash。

### Charlie — Ready / Executed

| 字段 | 值 |
|---|---|
| transactionHash | `0xMockTxCharlie1234567890abcdef` |
| recipientWallet | `0xCharlieWalletAddress` |
| amount | 10 |
| token | USDC |
| paymentStatus | success |

### Data API — Ready / Executed

| 字段 | 值 |
|---|---|
| transactionHash | `0xMockTxVendor1234567890abcdef` |
| recipientWallet | `0xDataAPIVendorAddress` |
| amount | 5 |
| token | USDC |
| paymentStatus | success |

## 验证需求

- 前端需要验证 transactionHash 格式（0x 开头 + 64 位十六进制）
- amount 需要与 Payment Plan 中对应项一致
- token 需要与 Budget Rule 中 allowedToken 一致
- blocked payment 不应显示 transactionHash
