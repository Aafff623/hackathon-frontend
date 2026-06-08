# AgentCFO Hackathon Submission Form Pack

本文件用于复制粘贴到 hackathon 提交表单、项目介绍、demo video 描述等场景。

---

## 1. Project Name

**AgentCFO / DAO AI 财务官**

---

## 2. One-line Summary

**English:**
AgentCFO is an AI CFO for Web3 small teams and DAOs that turns contribution records into risk-checked payout plans with human approval and auditable settlement reports.

**中文：**
AgentCFO 是面向 Web3 小团队和 DAO 的 AI 财务官，将贡献记录自动转化为风险检查后的付款计划，经人工确认后输出可审计的结算报告。

---

## 3. Short Description

**English (100–150 words):**

AgentCFO helps Web3 teams and DAOs automate treasury payouts. It reads contributor records and subscription bills, generates a payment plan, runs risk checks against budget and whitelist rules, requires human approval for every payout, and produces a settlement receipt.

The current demo is a mock-only frontend that shows the full workflow: Payment Plan → Risk Gate → Human Approval → Simulated CAW Execution → Settlement Receipt. No real backend API, no real Cobo Agentic Wallet call, and no real blockchain transaction are involved yet. All execution results are simulated with clear mock labels.

UI slots for Agent Wallet, permission boundary, tx hash, and audit report are pre-structured for real Cobo Agentic Wallet integration in the next iteration.

**中文（150–250 字）：**

AgentCFO 帮助 Web3 小团队和 DAO 自动化处理 treasury 付款。它读取贡献者记录和工具订阅账单，生成付款计划，针对预算和白名单规则执行风险检查，要求每一笔 payout 都必须经过人工确认，最后输出结算收据。

当前 demo 是一个纯前端 mock 演示，展示了完整工作流：Payment Plan → Risk Gate → Human Approval → Simulated CAW Execution → Settlement Receipt。尚未接入真实后端 API、真实 Cobo Agentic Wallet 调用、以及真实链上交易。所有执行结果都带有明确的 mock 标注。

Agent Wallet 地址、permission boundary、tx hash、audit report 等 UI 展示位已经预留，可在下一轮迭代中直接接入真实 Cobo Agentic Wallet。

---

## 4. Long Description / Project Overview

**English:**

**Problem:** DAOs and Web3 small teams regularly pay contributors and tool subscriptions, but the process is manual, error-prone, and hard to audit. Budget overruns, wrong recipients, duplicate payments, and lack of approval trails are common risks.

**Solution:** AgentCFO acts as an AI CFO. It ingests contribution records and treasury rules, automatically generates a risk-checked payment plan, enforces human approval before any fund transfer, and outputs a formal settlement receipt for audit purposes.

**Demo Workflow:** The current frontend demo shows a DAO with 3 contributor payouts + 1 subscription bill (50 USDC total). AgentCFO generates the plan, runs 4 risk checks (budget, whitelist, single-payment limit, duplicate), blocks Bob via whitelist failure, approves the safe 3 items, simulates CAW execution with mock tx hashes, and produces a settlement receipt showing approved / blocked / executed amounts.

**Cobo Track Fit:** AgentCFO demonstrates agentic treasury payout, permission boundary enforcement, human-in-the-loop approval, auditability via settlement receipts, and a clear agent wallet execution path. The `lib/api/caw.ts` adapter is pre-structured for real Cobo Agentic Wallet integration.

**Current Boundary:** This is a frontend mock demo. No real backend API, no real Cobo CAW call, no real blockchain transaction. All tx hashes are mock. The demo proves the UI flow, data model, and narrative closure.

**Next Step:** Wire the pre-structured API adapters to real Cobo Agentic Wallet testnet execution, enabling real on-chain transactions under the same permission boundary and approval flow.

**中文：**

**问题：** DAO 和 Web3 小团队经常需要给贡献者和工具订阅付款，但整个过程依赖手工操作，容易出错，且难以审计。预算超支、错误收款方、重复付款、缺少审批记录是常见风险。

**解决方案：** AgentCFO 充当 AI 财务官。它读取贡献记录和 treasury 规则，自动生成经过风险检查的付款计划，在任何资金转账前强制执行人工确认，并输出正式的结算收据供审计使用。

**Demo 工作流：** 当前前端 demo 展示了一个 DAO 有 3 位贡献者 + 1 个工具订阅（共 50 USDC）。AgentCFO 生成计划，执行 4 项风险检查（预算、白名单、单笔限额、重复付款），通过白名单失败阻断 Bob，批准其余 3 项安全付款，模拟 CAW 执行（mock tx hash），最后输出结算收据，展示 approved / blocked / executed 金额。

**Cobo 赛道契合：** AgentCFO 展示了 agentic treasury payout、permission boundary 强制执行、human-in-the-loop 审批、settlement receipt 审计能力，以及清晰的 agent wallet 执行路径。`lib/api/caw.ts` adapter 已为真实 Cobo Agentic Wallet 集成预留结构。

**当前边界：** 这是一个前端 mock demo。没有真实后端 API、没有真实 Cobo CAW 调用、没有真实链上交易。所有 tx hash 均为 mock。本 demo 验证了 UI 流程、数据模型和叙事闭环。

**下一步：** 将预结构的 API adapter 接入真实 Cobo Agentic Wallet testnet 执行，在相同的 permission boundary 和审批流程下实现真实链上交易。

---

## 5. Track Fit — Cobo Agentic Wallet

- **Agentic treasury payout:** AgentCFO autonomously reads contribution records and generates payout plans without manual spreadsheet work
- **Permission boundary:** Budget limit, single-payment cap, token whitelist, and recipient whitelist are enforced before any execution
- **Human-in-the-loop:** Every payout requires explicit human approval — the agent never autonomously transfers funds
- **Auditability:** Every decision (risk check, approval, execution) is recorded in a formal settlement receipt
- **Agent Wallet execution path:** UI demonstrates how a Cobo Agentic Wallet would execute approved payouts under policy constraints
- **Future real CAW integration:** `lib/api/caw.ts` adapter is pre-structured for real Cobo Agentic Wallet API calls; UI slots for wallet address, tx hash, and permission boundary are ready
- **Current execution is simulated:** The demo uses mock tx hashes and a simulated banner; real testnet integration is the next iteration

---

## 6. Demo Links

- **Live Demo:** https://hackathon-frontend-sigma.vercel.app
- **Demo Console:** https://hackathon-frontend-sigma.vercel.app/demo
- **GitHub Repo:** https://github.com/Aafff623/hackathon-frontend

---

## 7. Demo Video Description

**English:**

This demo video shows AgentCFO, an AI CFO for Web3 small teams and DAOs. In 3 minutes, we walk through the full treasury payout workflow:

1. Payment Plan — 3 contributor payouts + 1 subscription bill (50 USDC)
2. Risk Gate — 4 automated checks; Bob is blocked by whitelist
3. Human Approval — safe items approved, blocked items rejected
4. Simulated CAW Execution — mock transaction results with clear simulated labels
5. Settlement Receipt — formal audit summary with approved / blocked / executed amounts

Current version is a frontend mock demo. No real API, Cobo CAW call, or blockchain transaction yet. UI and data flow are pre-structured for real integration.

**中文：**

本 demo 视频展示 AgentCFO，一款面向 Web3 小团队和 DAO 的 AI 财务官。3 分钟内完整 walkthrough treasury payout 工作流：

1. Payment Plan — 3 位贡献者 + 1 个工具订阅（50 USDC）
2. Risk Gate — 4 项自动检查；Bob 被白名单阻断
3. Human Approval — 安全项目 approved，阻断项目 rejected
4. Simulated CAW Execution — 模拟交易结果，带有明确的 simulated 标注
5. Settlement Receipt — 正式审计汇总，展示 approved / blocked / executed 金额

当前版本为前端 mock demo。尚未接入真实 API、Cobo CAW 调用或链上交易。UI 和数据流已为真实集成预结构。

---

## 8. Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Vercel (deployment)
- Mock-first frontend architecture

---

## 9. What Is Implemented

- [x] Landing entry `/` — project pitch + link to Demo Console
- [x] Demo Console `/demo` — 6-section dashboard
  - [x] Agent Workflow Timeline
  - [x] Payment Plan Board
  - [x] Risk Gate
  - [x] Human Approval
  - [x] Simulated CAW Execution
  - [x] Settlement Receipt / Audit Report
- [x] Mock data layer
- [x] API adapter stubs (pre-structured for real integration)
- [x] README with live demo link and mock/real boundary
- [x] Vercel production deployment

---

## 10. Current Limitations

These are current demo scope limitations, not project failures:

- No real backend API (mock data only)
- No real Cobo Agentic Wallet call (execution is simulated)
- No real blockchain transaction (all tx hashes are mock)
- No lint / test / CI configuration
- No full marketing landing page (simple entry only)
- No loading / skeleton / error UI states

All UI structures, data models, and adapter interfaces are pre-built for real integration in subsequent iterations.

---

## 11. Future Roadmap

1. **Connect real Cobo Agentic Wallet testnet execution** — highest impact for sponsor-fit
2. **Backend API integration** — real contribution data and treasury rules
3. **Configurable treasury rules** — dynamic budget, whitelist, limit settings
4. **Real DAO contribution data import** — GitHub, Discord, on-chain activity
5. **Richer audit trail** — full history, CSV export, on-chain attestation
6. **Governance / multisig integration** — Snapshot, Safe, future extension

---

## 12. Suggested Submission Answer Snippets

### Problem

DAOs and Web3 small teams regularly pay contributors and tool subscriptions, but the process is manual, error-prone, and hard to audit. Budget overruns, wrong recipients, duplicate payments, and lack of approval trails are common risks that cost teams time and money.

### Solution

AgentCFO acts as an AI CFO. It ingests contribution records and treasury rules, automatically generates a risk-checked payment plan, enforces human approval before any fund transfer, and outputs a formal settlement receipt. The current demo is a frontend mock that proves the UI flow, data model, and narrative closure.

### What makes it agentic?

AgentCFO autonomously analyzes payment requests, generates payout plans, runs multi-dimensional risk checks, and prepares execution proposals — all without manual spreadsheet work. The agent operates within strict permission boundaries and never executes payouts without human approval.

### Why Cobo?

AgentCFO aligns with Cobo Agentic Wallet's core value: programmable, permissioned, auditable treasury execution. We demonstrate permission boundary enforcement, human-in-the-loop approval, agent wallet execution path, and settlement receipt auditability — all pre-structured for real Cobo CAW integration.

### What did we build during the hackathon?

A mock-only frontend demo with 6 core sections: Workflow Timeline, Payment Plan, Risk Gate, Human Approval, Simulated CAW Execution, and Settlement Receipt. All UI slots for real integration (Agent Wallet, tx hash, permission boundary) are pre-built. The project is deployed on Vercel with a live demo link.

### What is mocked vs real?

**Mock:** payment data, risk check results, execution transactions, tx hashes, backend API.
**Real:** UI structure, component architecture, data flow, adapter interfaces, deployment pipeline.

### Next step after hackathon

Wire the pre-structured API adapters to real Cobo Agentic Wallet testnet execution, enabling real on-chain transactions under the same permission boundary and approval flow.

---

## 13. Team / Role Placeholder

```md
## Team

- Frontend / Demo Console: [name]
- Backend / Agent Logic: [name]
- Cobo / Wallet Integration: [name]
- Product / Pitch: [name]
- Design / Materials: [name]
```

请按实际团队填写，不要编造信息。

---

*Generated from README + submission-snapshot.md + demo-runbook.md. Last updated: 2026-06-08.*
