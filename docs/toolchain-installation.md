# 工具链安装计划

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

## 已检测状态

| 项目 | 状态 | 备注 |
|---|---|---|
| Skills 目录 | 存在 | `~/.claude/skills/` |
| heroui-react-pro | 已安装 | Skill 可用 |
| heroui-pro-design-taste | 已安装 | Skill 可用 |
| mattpocock-skills | 已安装 | Skill 可用 |
| superpowers | 未安装 | 未检测到 |
| MindPowerKit | 未安装 | 未检测到 |
| hpmcp (Local MCP) | 已配置 | `claude mcp list` 中显示 heroui-pro 已连接 |

## 环境变量

| 变量 | 状态 |
|---|---|
| HEROUI_KEY | 不存在 |
| HEROUI_TOKEN | 不存在 |
| HEROUI_PERSONAL_TOKEN | 不存在 |

## Next.js 初始化冲突提示

**当前已有 `app/page.tsx` 和 `app/demo/page.tsx` 占位。**

后续初始化 Next.js 时，**不应直接覆盖现有文件**。

推荐先 Git baseline commit，再选择初始化方式：

- 如果使用 `create-next-app`，需要注意非空目录和 `app/` 冲突
- 建议：先 `git add . && git commit -m "chore: baseline before Next.js init"`，再评估是手动配置还是使用 create-next-app 的 `--use-npm` / `--typescript` 等选项
- 手动配置方式：初始化 `package.json` + 安装 `next react react-dom typescript @types/react @types/react-dom tailwindcss postcss autoprefixer` + 手动配置 `next.config.js`、`tsconfig.json`、`tailwind.config.js`

## 安装计划

### HeroUI Pro 包（hpsetup）

- 需要 HEROUI_KEY
- 建议先执行 Git baseline commit
- 首选 `--dry-run`
- 命令：`hpsetup`（待确认）
- **必须先 baseline commit，优先 dry-run**

### hpmcp Local MCP

- 已配置，但命令模板依赖 `HEROUI_TOKEN` 环境变量
- 当前状态：已连接（可能使用了缓存或其他认证方式）
- 如需重新配置，需要 HEROUI_TOKEN

### HeroUI Pro Skills

- heroui-react-pro：已安装
- heroui-pro-design-taste：已安装
- heroui-native-pro：未检测是否需要

### Superpowers

- 未检测到
- 安装命令待确认
- 建议从官方文档获取安装方式
- **不得编造安装命令**

### Matt Pocock Skills

- mattpocock-skills：已安装
- setup-matt-pocock-skills：已安装

### MindPowerKit

- 未检测到
- 安装命令无法从本地文档确认
- **待用户确认**：是否安装？安装命令是什么？
- **不得编造安装命令**

## 待用户确认

1. 是否正式采用 Next.js？
2. 是否安装 HeroUI v3 / Pro？
3. 是否配置 hpmcp Local MCP（需要 HEROUI_TOKEN）？
4. 是否安装 HeroUI Skills（需要 HEROUI_PERSONAL_TOKEN）？
5. 是否安装 Superpowers？
6. 是否安装 MindPowerKit？
7. 是否启用 Tailwind CSS？
8. 是否将 mock contract 发给后端 / 合约同学？
