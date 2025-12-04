## Happy Linux Cheatbook

**Live at: [happylinux.space](https://happylinux.space)**

An elegant Apple-style learning tool that transforms 20 high-frequency Linux commands into bilingual stories with dual-track learning (Beginner/Professional). Built with React + Tailwind.

优雅如 Apple 博客、却充满 Linux 学习灵感的 React + Tailwind 单页应用。把 20 个高频命令用双语故事化呈现，支持新手/专业双轨制学习。

### 核心特性

- **双语完全翻译**：中文/English 无缝切换，每个命令都有完整的双语内容
- **双轨学习模式**：
  - 🎨 **新手模式**：角色人设 + 冰淇淋口味比喻 + 记忆钩子
  - ⚙️ **专业模式**：实战使用场景 + 参数详解 + 现代平替工具
- **多维度导航**：按使用场景、使用频率、学习难度、全部命令分类浏览
- **智能搜索**：跨语言关键词搜索，实时过滤命令
- **Pipeline 圣代实验室**：以甜品分层比喻管道思路，展示命令链的艺术性组合
- **现代平替指南**：为每个命令列出 2-3 个现代替代工具（eza、rg、jq 等）

### 包含的 20 个命令

**文件操作（6）**: ls, cd, pwd, cp, mv, rm, mkdir, touch
**文本处理（3）**: grep, awk, sed, cat, head, tail
**打包压缩（1）**: tar, gzip
**系统信息（2）**: ps, top
**权限管理（2）**: chmod, chown

### 技术栈

- [Vite](https://vite.dev/) 7.x + React 19 + SWC 编译
- [Tailwind CSS](https://tailwindcss.com/) v4 via [`@tailwindcss/vite`](https://tailwindcss.com/docs/installation/using-vite)
- [react-i18next](https://www.i18next.com/overview/react-overview) 双语国际化
- 完全数据驱动的架构（`src/data/commands.js`）支持快速扩展到 50+ 命令

### 开发指南

1. 安装依赖：

```bash
npm install
```

2. 运行开发服务器：

```bash
npm run dev
```

3. 构建产物：

```bash
npm run build
```

4. 本地预览构建结果：

```bash
npm run preview
```

### 项目结构

```
src/
├── App.jsx                    # 主应用入口，状态管理
├── main.jsx
├── index.css                  # 全局样式
├── components/
│   ├── layout/
│   │   ├── Header.jsx         # 顶部标题和语言切换
│   │   ├── TabNavigation.jsx  # 多维度Tab导航（场景/频率/难度）
│   │   └── ModeSwitch.jsx     # 新手/专业模式切换
│   ├── search/
│   │   └── SearchBar.jsx      # 智能搜索栏
│   └── sections/
│       ├── MemoryFramework.jsx # 4大记忆法介绍卡
│       ├── CommandList.jsx     # 命令卡片列表
│       └── PipelineLab.jsx     # Pipeline圣代实验室
├── data/
│   ├── commands.js            # 20个命令的完整数据模型
│   └── index.js               # 查询API（getByCategory, searchCommands等）
└── i18n/
    ├── locales/
    │   ├── zh/
    │   │   └── common.json    # 中文UI翻译
    │   └── en/
    │       └── common.json    # 英文UI翻译
    └── config.js              # i18next配置
```

### 数据模型扩展

每个命令遵循统一的 schema：

```javascript
{
  id: 'command-name',
  command: 'cmd',
  category: {
    scenario: 'file-operations|text-processing|archives|system-info|networking|permissions',
    frequency: 'high|medium|low',
    difficulty: 'beginner|intermediate|advanced'
  },
  content: {
    zh: { fullName, beginner: {persona, story, metaphor}, professional: {summary, useCases}, history, parameters, alternatives },
    en: { /* same structure */ }
  },
  pipelineSpark: { label, recipe, tip }
}
```

新增命令只需添加到 `src/data/commands.js` 并遵循同样 schema，自动适配所有UI层。

### 快速开始扩展

要从 20 个命令扩展到 50+：

1. 编辑 `src/data/commands.js`
2. 添加命令时同步更新 i18n 翻译（中英文）
3. 确保 `category.frequency` 和 `category.difficulty` 使用已有值
4. 运行 `npm run lint` 检查代码质量
5. 运行 `npm run build` 验证编译成功

### 记忆法设计

- **中文**：冰淇淋/舞台剧场比喻系统
  - 参数 = 冰淇淋口味（-a=杏仁, -h=牛奶等）
  - 命令 = 舞台角色（舞监Luna、侦探Greta等）

- **英文**：仓库/库存管理比喻系统
  - 参数 = 配料和选项
  - 命令 = 仓库工作人员

两套比喻系统都基于相同的心理学原理，帮助学习者快速记忆和理解。
