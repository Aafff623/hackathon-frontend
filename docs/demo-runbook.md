# AgentCFO Demo Runbook

## Demo Goal

用 3–5 分钟讲清楚：

AgentCFO 如何帮助 Web3 小团队 / DAOs 从贡献记录生成付款计划，经过风险检查和人工确认，再执行模拟钱包付款并生成审计报告。

## Demo Links

- **Live demo:** https://hackathon-frontend-sigma.vercel.app
- **Demo console:** https://hackathon-frontend-sigma.vercel.app/demo
- **GitHub repo:** https://github.com/Aafff623/hackathon-frontend

---

## 3-minute Walkthrough Script

### 0:00–0:30 Problem

> "DAO 小团队经常需要给贡献者和工具订阅付款，但手工整理贡献记录、核对预算、管理白名单、逐笔审批、最后还要审计，整个过程非常容易出错，而且耗时。"

### 0:30–1:00 Product Positioning

> "AgentCFO is an AI CFO for Web3 small teams and DAOs. 它把贡献记录和 treasury 规则自动转成 risk-checked 的付款计划，经过人工确认后执行，并输出可审计的结算报告。"

**操作：** 打开 live demo，点击 **"View Demo Console →"**

### 1:00–1:40 Payment Plan

**操作：** 滚动到 **Payment Plan** 区块

> "这是我们的付款计划。DAO 这个月有 3 位贡献者 + 1 个工具订阅，总共 50 USDC。"
>
> "可以看到每一项都有：贡献者名字、钱包地址、金额、用途描述，还有状态标签和风险等级。"
>
> "注意 Bob 这一行——他有一个红色的左边框，状态是 Blocked，风险等级是 High。"

### 1:40–2:20 Risk Gate

**操作：** 滚动到 **Risk Gate** 区块

> "在进入执行之前，AgentCFO 会先跑 Risk Gate，做四项检查："
>
> "Budget Check——总金额 50 USDC，在月度预算内，通过。"
>
> "Whitelist Check——这里失败了。Bob 的钱包地址不在白名单里，所以被阻断。"
>
> "Single-Payment Limit 和 Duplicate Check 都通过了。"
>
> "这意味着：AgentCFO 不会执行任何不安全的付款。"

### 2:20–3:00 Human Approval + Simulated Execution

**操作：** 滚动到 **Human Approval** 和 **Execution Result**

> "接下来是 Human Approval。AgentCFO 不会绕过人工审批——安全的付款进入 approved，被阻断的付款直接 rejected。"
>
> "在当前这个 demo 里，CAW Execution 是模拟的。我们有 amber banner 明确标注 'Simulated Execution — No real blockchain transaction occurred'。"
>
> "这里可以看到模拟的 tx hash、Base Sepolia testnet 标签、Agent Wallet 地址。这些都是展示位，后续可以直接接入真实 Cobo Agentic Wallet。"

### 3:00–3:40 Settlement Receipt

**操作：** 滚动到 **Settlement Receipt**

> "最后是 Settlement Receipt，也就是审计报告。"
>
> "Approved: 3 笔，Blocked: 1 笔，Planned: 50 USDC，Executed: 35 USDC。"
>
> "还有 Execution Summary 和 Risk Summary，记录了整个过程的关键决策。"
>
> "这就是 AgentCFO 的核心闭环：从付款需求到 risk check，到人工确认，到执行，到审计。"

### 3:40–4:20 Cobo Track Fit

> "这个 demo 特别适合 Cobo Agentic Wallet track，因为："
>
> "第一，agentic treasury payout——Agent 自动分析付款需求并生成计划。"
>
> "第二，permission boundary——预算、单笔限额、token 白名单、recipient 白名单都在执行前被检查。"
>
> "第三，human-in-the-loop——任何 payout 都需要人工确认，Agent 不会自主转账。"
>
> "第四，auditability——每一步决策都有记录，输出正式的 settlement receipt。"
>
> "第五，agent wallet execution path——UI 已经预留了 Agent Wallet、tx hash、permission boundary 的展示位，可以直接对接 Cobo Agentic Wallet。"

### 4:20–5:00 Current Boundary + Next Step

> "当前版本是一个 frontend mock demo，没有真实 API、没有真实 Cobo CAW 调用、没有真实链上交易。"
>
> "但所有 UI 结构、数据流、adapter 接口都已经预留好了。下一步就是接入真实 Cobo Agentic Wallet 的 testnet execution。"

---

## Demo Click Path

1. 打开 https://hackathon-frontend-sigma.vercel.app
2. 看到 Landing Entry（AgentCFO / DAO AI 财务官）
3. 点击 **"View Demo Console →"**
4. 进入 `/demo`，展示 **Agent Workflow Timeline**
5. 滚动展示 **Payment Plan**（指出 Bob blocked）
6. 滚动展示 **Risk Gate**（指出 Whitelist Check failed）
7. 滚动展示 **Human Approval**（approved vs blocked）
8. 滚动展示 **Execution Result**（amber simulated banner）
9. 滚动展示 **Settlement Receipt**（统计 + summary）
10. 结束

---

## What To Emphasize

- **Risk-check first** — AgentCFO 不会执行任何未通过风险检查的付款
- **Human approval** — 没有人工确认，不会执行
- **No unsafe autonomous transfer** — 被阻断的付款无法继续
- **Auditability** — 每一步都有记录，输出 settlement receipt
- **Cobo Agentic Wallet future integration** — UI 已预留所有对接位，adapter 已结构化

## What Not To Say

**明确禁止：**

- ❌ 不要说"已经真实接入 Cobo"
- ❌ 不要说"已经发生真实链上交易"
- ❌ 不要说"mock tx hash 是真实的"
- ❌ 不要把当前 demo 描述成"完整的财务系统"
- ❌ 不要说"所有功能都已经完成"

**正确表达：**

- ✅ "当前是 frontend mock demo，UI 和数据流已经闭环"
- ✅ "CAW Execution 是 simulated，所有 tx hash 都是 mock"
- ✅ "下一步是接入真实 Cobo Agentic Wallet testnet"
- ✅ "permission boundary、human approval、auditability 已经体现在 UI 中"

---

## Recording Checklist

- [ ] 浏览器宽度建议 1280px 或 1440px（桌面端最佳展示）
- [ ] 隐藏个人标签页 / 书签栏（保持画面干净）
- [ ] 使用 live demo URL，不要 localhost
- [ ] 先检查 `/` 和 `/demo` 都能正常打开
- [ ] 保持页面缩放 100%，确保文字清晰可读
- [ ] 建议录制 1080p
- [ ] 备用方案：本地 `pnpm dev` 如果线上不可用
- [ ] 准备一句话项目介绍作为视频开头

## Fallback Plan

如果线上 demo 临时不可用：

1. 本地运行 `pnpm dev`
2. 打开 http://localhost:3000
3. 点击 "View Demo Console →"
4. 按相同 click path 演示
