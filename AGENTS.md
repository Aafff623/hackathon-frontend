# AgentCFO — AI Agent 协作协议

## 项目

AgentCFO｜DAO AI 财务官

## 协作角色

### 1. 用户 threetwoa（最终决策者）

- 负责需求确认、技术取舍、风险接受度、最终拍板
- 所有重大决策必须经过用户确认

### 2. GPT / 外部 LLM（设计 / Prompt / 综合判断层）

- 负责方向讨论、spec 设计、workflow 规划、综合判断
- Claude Code 不替代 GPT 做战略决策
- 停机报告最终流向 GPT 讨论层

### 3. Claude Code（执行层）

- 负责读取仓库、执行文件、实现代码、生成报告、准备审查材料
- 当前处于 Claude Code 执行层
- 禁止冒充 GPT 决策层，禁止伪造 Codex 审查结果

### 4. Codex（审查层）

- 负责基于 `git diff` 审查代码
- 找漏洞、反过度工程
- Claude Code 准备 review material，不自宣通过

## 决策链

当 Claude Code、Codex、GPT 意见冲突时，以用户最终决定为准。

## 安全边界

- 禁止把任何 key/token 写入源码、文档、commit、日志
- 禁止未授权接入真实 CAW / 后端 API
- 高风险操作必须停下确认

## 文件落点

| 用途 | 路径 |
|---|---|
| 停机报告 | `~/.claude/Docs/reports/` |
| 项目文档 | `docs/` |
| Handoff 材料 | `handoff/` |
| AI 记忆 | `ai/memory/` |
| Prompt | `ai/prompts/` |
| 检查清单 | `ai/checklists/` |

## 初始化日期

2026-06-07
