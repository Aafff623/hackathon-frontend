# Prompt: 工具链 Bootstrap

## 目标

安装和配置项目所需工具链。

## 前置条件

- 用户明确批准安装
- 必要的环境变量已配置

## 安装禁令（硬规则）

任何安装 / 初始化 / MCP / Skill / hpsetup / create-next-app 命令，必须满足四件事：

1. **用户明确批准**
2. **命令来源已确认**
3. **已说明会修改哪些文件**
4. **若涉及 hpsetup / Pro 包安装，必须先 baseline commit，并优先 dry-run**

附加禁令：

- 未知安装命令不得执行
- MindPowerKit 安装命令未确认，不得编造
- Superpowers 安装命令未确认，不得编造
- **不得把 HEROUI_KEY / HEROUI_TOKEN / HEROUI_PERSONAL_TOKEN 写入任何文件**

## 可安装项

1. Next.js 项目初始化（如未初始化）
2. HeroUI Pro 包（hpsetup，需 HEROUI_KEY）
3. hpmcp Local MCP（需 HEROUI_TOKEN）
4. HeroUI Skills（需 HEROUI_PERSONAL_TOKEN）
5. Superpowers
6. Matt Pocock Skills（已安装）
7. MindPowerKit

## Next.js 初始化冲突提示

**当前已有 `app/page.tsx` 和 `app/demo/page.tsx` 占位。**

后续初始化 Next.js 时，**不应直接覆盖现有文件**。

推荐先 Git baseline commit，再选择初始化方式。

## 安全规则

- 使用环境变量传递 key/token
- 禁止把 key/token 写入任何文件
- 首选 --dry-run
- 高风险命令停下确认
