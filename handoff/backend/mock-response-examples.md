# Mock Response Examples

## GET /api/payment-plans

```json
{
  "ok": true,
  "data": [
    {
      "id": "plan-1",
      "items": [
        {
          "id": "item-1",
          "recipient": {
            "id": "user-1",
            "name": "Alice",
            "walletAddress": "0xAliceWalletAddress",
            "role": "内容贡献"
          },
          "amount": 20,
          "token": "USDC",
          "description": "撰写 AgentCFO 技术文档",
          "status": "ready"
        },
        {
          "id": "item-2",
          "recipient": {
            "id": "user-2",
            "name": "Bob",
            "walletAddress": "0xBobWalletAddress",
            "role": "设计贡献"
          },
          "amount": 15,
          "token": "USDC",
          "description": "设计 Demo Console UI",
          "status": "blocked"
        },
        {
          "id": "item-3",
          "recipient": {
            "id": "user-3",
            "name": "Charlie",
            "walletAddress": "0xCharlieWalletAddress",
            "role": "社群运营贡献"
          },
          "amount": 10,
          "token": "USDC",
          "description": "社群 AMA 主持",
          "status": "ready"
        },
        {
          "id": "item-4",
          "recipient": {
            "id": "vendor-1",
            "name": "Data API",
            "walletAddress": "0xDataAPIVendorAddress",
            "role": "工具订阅"
          },
          "amount": 5,
          "token": "USDC",
          "description": "Data API 订阅 (2026-06)",
          "status": "ready"
        }
      ],
      "totalAmount": 50,
      "token": "USDC",
      "status": "risk_checked",
      "createdAt": "2026-06-07T00:00:00Z"
    }
  ]
}
```

## GET /api/budget-rules

```json
{
  "ok": true,
  "data": {
    "monthlyBudget": 50,
    "singlePaymentLimit": 25,
    "allowedToken": "USDC",
    "requiresHumanApproval": true,
    "whitelist": [
      "0xAliceWalletAddress",
      "0xCharlieWalletAddress",
      "0xDataAPIVendorAddress"
    ]
  }
}
```

## GET /api/risk-check/:planId

```json
{
  "ok": true,
  "data": {
    "passed": false,
    "checks": {
      "budgetCheck": {
        "passed": true,
        "reason": "Total 50 USDC within monthly budget 50 USDC"
      },
      "whitelistCheck": {
        "passed": false,
        "blockedWallets": ["0xBobWalletAddress"],
        "reason": "Bob (0xBobWalletAddress) is not in whitelist"
      },
      "limitCheck": {
        "passed": true,
        "reason": "All payments within single payment limit 25 USDC"
      },
      "duplicateCheck": {
        "passed": true,
        "reason": "No duplicate payments detected"
      }
    }
  }
}
```

## POST /api/payment-plans/:id/approve

```json
{
  "ok": true,
  "data": {
    "id": "plan-1",
    "status": "executing",
    "approvedAt": "2026-06-07T12:00:00Z",
    "approvedBy": "HumanOperator"
  }
}
```

## POST /api/caw/execute

```json
{
  "ok": true,
  "data": [
    {
      "agentWalletAddress": "0xAgentWalletPlaceholder",
      "testnetName": "Base Sepolia",
      "transactionHash": "0xMockTxAlice1234567890abcdef",
      "paymentStatus": "success",
      "token": "USDC",
      "amount": 20,
      "recipientWallet": "0xAliceWalletAddress",
      "permissionBoundary": "budget:50/singleLimit:25/token:USDC/approval:required"
    },
    {
      "agentWalletAddress": "0xAgentWalletPlaceholder",
      "testnetName": "Base Sepolia",
      "transactionHash": "0xMockTxCharlie1234567890abcdef",
      "paymentStatus": "success",
      "token": "USDC",
      "amount": 10,
      "recipientWallet": "0xCharlieWalletAddress",
      "permissionBoundary": "budget:50/singleLimit:25/token:USDC/approval:required"
    },
    {
      "agentWalletAddress": "0xAgentWalletPlaceholder",
      "testnetName": "Base Sepolia",
      "transactionHash": "0xMockTxVendor1234567890abcdef",
      "paymentStatus": "success",
      "token": "USDC",
      "amount": 5,
      "recipientWallet": "0xDataAPIVendorAddress",
      "permissionBoundary": "budget:50/singleLimit:25/token:USDC/approval:required"
    }
  ]
}
```

## GET /api/audit-report/:planId

```json
{
  "ok": true,
  "data": {
    "id": "audit-1",
    "paymentPlanId": "plan-1",
    "timestamp": "2026-06-07T12:05:00Z",
    "summary": "Payment plan executed with 3 successful transactions. 1 item blocked by whitelist check (Bob).",
    "transactions": [
      {
        "agentWalletAddress": "0xAgentWalletPlaceholder",
        "testnetName": "Base Sepolia",
        "transactionHash": "0xMockTxAlice1234567890abcdef",
        "paymentStatus": "success",
        "token": "USDC",
        "amount": 20,
        "recipientWallet": "0xAliceWalletAddress",
        "permissionBoundary": "budget:50/singleLimit:25/token:USDC/approval:required"
      },
      {
        "agentWalletAddress": "0xAgentWalletPlaceholder",
        "testnetName": "Base Sepolia",
        "transactionHash": "0xMockTxCharlie1234567890abcdef",
        "paymentStatus": "success",
        "token": "USDC",
        "amount": 10,
        "recipientWallet": "0xCharlieWalletAddress",
        "permissionBoundary": "budget:50/singleLimit:25/token:USDC/approval:required"
      },
      {
        "agentWalletAddress": "0xAgentWalletPlaceholder",
        "testnetName": "Base Sepolia",
        "transactionHash": "0xMockTxVendor1234567890abcdef",
        "paymentStatus": "success",
        "token": "USDC",
        "amount": 5,
        "recipientWallet": "0xDataAPIVendorAddress",
        "permissionBoundary": "budget:50/singleLimit:25/token:USDC/approval:required"
      }
    ],
    "riskCheck": {
      "passed": false,
      "checks": {
        "budgetCheck": { "passed": true, "reason": "Total 50 USDC within monthly budget 50 USDC" },
        "whitelistCheck": { "passed": false, "blockedWallets": ["0xBobWalletAddress"], "reason": "Bob is not in whitelist" },
        "limitCheck": { "passed": true, "reason": "All payments within single payment limit 25 USDC" },
        "duplicateCheck": { "passed": true, "reason": "No duplicate payments detected" }
      }
    },
    "approvedBy": "HumanOperator"
  }
}
```

## Error Response Examples

### Budget Exceeded

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

### Unauthorized

```json
{
  "ok": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Wallet not in whitelist"
  }
}
```

### Not Found

```json
{
  "ok": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "Payment plan not found"
  }
}
```
