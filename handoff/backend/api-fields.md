# API Fields

## Response Envelope

### ApiResponse<T>

| 字段 | 类型 | 说明 |
|---|---|---|
| ok | boolean | 请求是否成功 |
| data | T | 响应数据（ok=true 时必有） |
| error | ApiError | 错误信息（ok=false 时必有） |
| meta | Record<string, unknown> | 可选元数据 |

### ApiError

| 字段 | 类型 | 说明 |
|---|---|---|
| code | string | 错误码 |
| message | string | 错误描述 |
| details | Record<string, unknown> | 可选详情 |

## Domain Models

### Contributor

| 字段 | 类型 | 说明 |
|---|---|---|
| id | string | 贡献者 ID |
| name | string | 姓名 |
| walletAddress | string | 钱包地址 |
| role | string | 角色 |

### ContributionRecord

| 字段 | 类型 | 说明 |
|---|---|---|
| id | string | 记录 ID |
| contributor | Contributor | 贡献者 |
| taskDescription | string | 任务描述 |
| amount | number | 金额 |
| token | string | 代币 |
| status | string | pending / approved / rejected |
| createdAt | string (ISO) | 创建时间 |

### SubscriptionBill

| 字段 | 类型 | 说明 |
|---|---|---|
| id | string | 账单 ID |
| serviceName | string | 服务名称 |
| amount | number | 金额 |
| token | string | 代币 |
| billingPeriod | string | 账单周期 |

### BudgetRule

| 字段 | 类型 | 说明 |
|---|---|---|
| monthlyBudget | number | 月度预算 |
| singlePaymentLimit | number | 单笔限额 |
| allowedToken | string | 允许代币 |
| requiresHumanApproval | boolean | 是否需要人工确认 |
| whitelist | string[] | 白名单钱包地址 |

### PaymentItem

| 字段 | 类型 | 说明 |
|---|---|---|
| id | string | 项目 ID |
| recipient | Contributor | 收款人 |
| amount | number | 金额 |
| token | string | 代币 |
| description | string | 描述 |

### PaymentPlan

| 字段 | 类型 | 说明 |
|---|---|---|
| id | string | 计划 ID |
| items | PaymentItem[] | 付款项列表 |
| totalAmount | number | 总金额 |
| token | string | 代币 |
| status | string | draft / analyzing / risk_checked / pending_approval / executing / completed / audit_generated |
| createdAt | string (ISO) | 创建时间 |

### RiskCheckResult

| 字段 | 类型 | 说明 |
|---|---|---|
| passed | boolean | 是否通过 |
| checks | object | 各检查项结果 |
| checks.budgetCheck | object | 预算检查 |
| checks.whitelistCheck | object | 白名单检查 |
| checks.limitCheck | object | 限额检查 |
| checks.duplicateCheck | object | 重复付款检查 |

### CAWExecution

| 字段 | 类型 | 说明 |
|---|---|---|
| agentWalletAddress | string | Agent Wallet 地址 |
| testnetName | string | 测试网名称 |
| transactionHash | string | 交易哈希 |
| paymentStatus | string | pending / success / failed |
| token | string | 代币 |
| amount | number | 金额 |
| recipientWallet | string | 收款钱包 |
| permissionBoundary | string | 权限边界描述 |

### AuditReport

| 字段 | 类型 | 说明 |
|---|---|---|
| id | string | 报告 ID |
| paymentPlanId | string | 关联计划 ID |
| timestamp | string (ISO) | 生成时间 |
| summary | string | 摘要 |
| transactions | CAWExecution[] | 交易记录 |
| riskCheck | RiskCheckResult | 风险检查结果 |
| approvedBy | string | 确认人 |
