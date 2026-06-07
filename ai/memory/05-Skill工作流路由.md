# Skill 工作流路由

## Superpowers 风格

```txt
需求不清 / 设计未定
→ brainstorming 思维
→ 先提问、澄清、收敛，不直接写代码

设计已定，需要拆任务
→ writing-plans 思维
→ 生成分阶段计划、验收标准、影响文件

计划已批准，需要执行
→ executing-plans 思维
→ 分批执行，每批都有 checkpoint

需要并发探索
→ parallel agents / subagent 思维
→ 只做分析或方案探索，不让并发 agent 同时乱改同一批文件

需要 Review
→ requesting-code-review / receiving-code-review 思维
→ 先自查，再交给 Codex 或用户 review
```

## Matt Pocock 风格

```txt
需求模糊
→ grill-me / grill-with-docs 思维
→ 追问目标、边界、验收标准、涉及模块

需要形成共享语言
→ 维护 ai/memory/01-项目上下文.md 和 docs/frontend-spec.md
→ 统一 AgentCFO、Payment Plan、Risk Check、CAW Execution、Audit Report 等术语

需要写功能
→ tdd 思维
→ 能写测试时使用 red-green-refactor；不能写测试时至少提供可验证路径

遇到 bug
→ diagnose 思维
→ reproduce → minimise → hypothesise → instrument → fix → regression check

进入陌生代码区域
→ zoom-out 思维
→ 先解释当前模块在系统中的位置，再修改

架构变复杂
→ improve-codebase-architecture 思维
→ 找 deep module、边界混乱、重复逻辑、文件散乱

需要任务拆分
→ to-issues 思维
→ 拆成 vertical slices，每个任务独立可交付

需要交接
→ handoff 思维
→ 生成面向下一个 agent / 队友的交接文档
```

## MindPowerKit

当前仅记录为待接入 workflow skill。
如本地已有安装说明或 Skill 包，读取并写入 docs/toolchain-installation.md。
如无法确认安装命令，不要编造，不要安装，写入"待用户确认"。
