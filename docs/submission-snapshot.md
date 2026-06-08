# AgentCFO Submission Snapshot

## Baseline

| Item | Value |
|---|---|
| Project | AgentCFO / DAO AI 财务官 |
| Live Demo | https://hackathon-frontend-sigma.vercel.app |
| GitHub Repo | https://github.com/Aafff623/hackathon-frontend |
| Current Commit | `9a3e29c fix: address demo submission review issues` |
| Demo Route | `/demo` |
| Status | mock-only frontend demo, ready for hackathon submission |
| Date | 2026-06-08 |

## One-line Pitch

AgentCFO is an AI CFO for Web3 small teams and DAOs. It turns contribution records and treasury rules into risk-checked payout plans, human-approved execution, and auditable settlement reports.

## What Is Implemented

- [x] Landing entry `/` — project name, one-line pitch, link to Demo Console
- [x] Demo Console `/demo` — core 6-section dashboard
  - [x] Agent Workflow Timeline — 7-step execution flow
  - [x] Payment Plan Board — contributor payouts + subscription bills
  - [x] Risk Gate — budget / whitelist / limit / duplicate checks
  - [x] Human Approval — approved vs blocked payout states
  - [x] Simulated CAW Execution — mock tx results with simulated banner
  - [x] Settlement Receipt / Audit Report — formal audit summary
- [x] Mock data layer — `lib/mock/*` + `lib/demo/demo-data.ts` adapter
- [x] API adapter stubs — `lib/api/*` (pre-structured for real integration)
- [x] README demo orientation — live demo link, mock/real boundary, Cobo track fit
- [x] Vercel deployment — production alias active

## Mock / Real Boundary

| Layer | Status | Note |
|---|---|---|
| Frontend UI | ✅ Implemented | Demo Console v0 with 6 core sections |
| Landing page | ✅ Implemented | `/` redirects to `/demo` via entry card |
| Mock data | ✅ Implemented | 3 contributors + 1 subscription; Bob blocked by whitelist |
| Payment Plan Logic | ✅ Mock | Generated from static mock data |
| Risk Gate Logic | ✅ Mock | Policy checks against static rules |
| Human Approval Flow | ✅ Mock | Static approved / blocked states |
| CAW Execution | ⚠️ Simulated | **No real Cobo Agentic Wallet call**; tx hashes are mock |
| Blockchain Transaction | ❌ None | **No real on-chain transaction occurred** |
| Backend API | ❌ Not implemented | `lib/api/*` adapters are placeholders; `request()` throws in mock mode |
| Real Agent Wallet | ❌ Not implemented | Display field only; `0xAgentWalletPlaceholder` |
| Real tx hash | ❌ Not implemented | All tx hashes prefixed with `0xMockTx...` |

UI has reserved display slots for Agent Wallet address, permission boundary, tx hash, and audit report. These can be wired to real Cobo Agentic Wallet / testnet execution in subsequent iterations.

## Cobo Track Fit

- **Agentic treasury payout:** AgentCFO autonomously analyzes payment requests and generates payout plans
- **Permission boundary:** Budget limit, single-payment cap, token whitelist, and recipient whitelist are enforced before execution
- **Human-in-the-loop:** Risk-checked plans require explicit human approval — no autonomous fund transfer
- **Auditability:** Every decision (risk check, approval, execution) is recorded in a settlement receipt
- **Agent Wallet execution path:** UI demonstrates how a Cobo Agentic Wallet would execute approved payouts under policy constraints
- **Future real CAW integration:** `lib/api/caw.ts` adapter is pre-structured for real Cobo Agentic Wallet API calls

## Current Demo Story

Happy path:

1. DAO has 3 contributor payouts + 1 tool subscription (Data API)
2. Total planned payout: 50 USDC
3. AgentCFO generates payment plan with 4 items
4. Risk Gate runs 4 checks:
   - Budget Check: ✅ within 50 USDC budget
   - Whitelist Check: ❌ Bob (0xBobWalletAddress) not in whitelist
   - Single-Payment Limit: ✅ all within 25 USDC limit
   - Duplicate Check: ✅ no duplicates
5. Human Approval:
   - Alice (20 USDC): approved
   - Charlie (10 USDC): approved
   - Data API (5 USDC): approved
   - Bob (15 USDC): blocked
6. Simulated CAW Execution:
   - 3 transactions "executed" on Base Sepolia testnet (simulated)
   - Mock tx hashes shown
   - Total executed: 35 USDC
7. Settlement Receipt:
   - Approved: 3 items
   - Blocked: 1 item
   - Planned: 50 USDC
   - Executed: 35 USDC
   - Risk summary: whitelist blocked 1 recipient

## Validation

| Check | Status |
|---|---|
| `pnpm typecheck` | ✅ Pass |
| `pnpm build` | ✅ Pass (`/`, `/demo` static prerender) |
| `pnpm dev` | ✅ Boots on localhost:3000 |
| `/` renders | ✅ Landing entry with demo link |
| `/demo` renders | ✅ 6 core sections visible |
| Vercel deployment | ✅ Production alias active |
| README demo link | ✅ Points to production alias |

## Known Non-blockers

These are known limitations but do **not** block hackathon submission:

- No real backend API (mock-only)
- No real Cobo Agentic Wallet integration (simulated execution)
- No real blockchain transaction (mock tx hashes)
- No lint / test / CI configuration
- Homepage is a simple landing entry, not a full marketing page
- No dark mode
- No responsive polish for very small screens
- No loading / skeleton / error UI states

## Next Possible Iterations

| Priority | Item | Effort | Impact |
|---|---|---|---|
| 1 | Demo video / screen recording | Low | High — essential for submission |
| 2 | Screenshots for README | Low | Medium — makes repo more appealing |
| 3 | Real Cobo Agentic Wallet testnet integration | Medium-High | Very High — strongest sponsor-fit evidence |
| 4 | Backend API handoff / contract | Medium | High — enables real data flow |
| 5 | HeroUI Pro component upgrade | Medium | Medium — visual polish |
| 6 | Dark mode / animation polish | Low-Medium | Low — nice to have |
