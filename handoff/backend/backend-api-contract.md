# Backend API Contract

## 基础信息

- Base URL: `http://localhost:3000`（开发环境）
- 所有响应格式: JSON，统一使用 `ApiResponse<T>` envelope

## 响应格式

```ts
interface ApiResponse<T> {
  ok: boolean;
  data: T;
  error?: ApiError;
  meta?: Record<string, unknown>;
}

interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}
```

- `ok: true` 时必有 `data`
- `ok: false` 时必有 `error`

## 当前阶段说明

**Mock-first。真实 API 尚未接入。**
`NEXT_PUBLIC_DEMO_MODE=mock` 为默认模式。
前端 `lib/api/client.ts` 在 mock 模式下会阻止真实请求。
组件层当前使用 `lib/mock/` 数据。

## Payment Plan 状态流

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

## API 列表

### GET /api/payment-plans

获取 Payment Plan 列表。

**Response:**
```json
{
  "ok": true,
  "data": [
    {
      "id": "plan-1",
      "items": [...],
      "totalAmount": 50,
      "token": "USDC",
      "status": "draft",
      "createdAt": "2026-06-07T00:00:00Z"
    }
  ]
}
```

### GET /api/payment-plans/:id

获取单个 Payment Plan。

**Response:**
```json
{
  "ok": true,
  "data": {
    "id": "plan-1",
    "items": [...],
    "totalAmount": 50,
    "token": "USDC",
    "status": "draft",
    "createdAt": "2026-06-07T00:00:00Z"
  }
}
```

### POST /api/payment-plans/:id/approve

人工批准 Payment Plan。

状态从 `pending_approval` 流转到 `executing`。

**Response (success):**
```json
{
  "ok": true,
  "data": {
    "id": "plan-1",
    "status": "executing",
    ...
  }
}
```

### POST /api/caw/execute

执行 CAW 付款。

**Request:**
```json
{ "paymentPlanId": "plan-1" }
```

**Response (success):**
```json
{
  "ok": true,
  "data": [
    {
      "agentWalletAddress": "0xAgentWalletPlaceholder",
      "testnetName": "Base Sepolia",
      "transactionHash": "0x...",
      "paymentStatus": "success",
      "token": "USDC",
      "amount": 20,
      "recipientWallet": "0xAliceWalletAddress",
      "permissionBoundary": "budget:50/singleLimit:25/token:USDC/approval:required"
    }
  ]
}
```

**Response (error - budget exceeded):**
```json
{
  "ok": false,
  "error": {
    "code": "BUDGET_EXCEEDED",
    "message": "Total amount exceeds monthly budget",
    "details": { "budget": 50, "requested": 60 }
  }
}
```

### GET /api/caw/status/:txHash

查询交易状态。

**Response:**
```json
{
  "ok": true,
  "data": {
    "agentWalletAddress": "0xAgentWalletPlaceholder",
    "testnetName": "Base Sepolia",
    "transactionHash": "0x...",
    "paymentStatus": "success",
    "token": "USDC",
    "amount": 20,
    "recipientWallet": "0xAliceWalletAddress",
    "permissionBoundary": "budget:50/singleLimit:25/token:USDC/approval:required"
  }
}
```
