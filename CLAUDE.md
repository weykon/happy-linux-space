# CLAUDE.md

本文档为在此仓库中工作的 Claude Code 提供指导。

## 项目概览

**Happy Linux Cheatbook** 是一个 Apple 风格的学习工具，通过故事化和比喻将 20 个高频 Linux 命令呈现给学习者。支持完整的双语（中文/English）和双轨制学习（新手/专业）。

- **核心创新**：命令拟人化（ls = 舞台经理 Luna）+ 参数冰淇淋口味（-a = 杏仁）+ 管道圣代比喻
- **技术栈**：Vite 7 + React 19 + Tailwind CSS v4 + react-i18next

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器 (http://localhost:5173)
npm run dev

# 生产构建
npm run build

# 预览生产构建
npm run preview

# 代码检查
npm run lint
```

## 架构总览

### 核心数据模型 (`src/data/commands.js`)

完整的数据驱动设计，所有 20 个命令遵循统一 schema：

```javascript
{
  id: 'cd',
  command: 'cd',
  category: {
    scenario: 'file-operations',
    frequency: 'high',
    difficulty: 'beginner'
  },
  content: {
    zh: {
      fullName: '更改目录',
      beginner: {
        persona: '舞台导航员 Navi',
        story: '舞台上每个区域都有个代号...',
        metaphor: { theme: 'icecream-theater', visualization: '🎭🗺️' }
      },
      professional: {
        summary: '...',
        useCases: [
          { problem: '进入项目目录开始工作', solution: 'cd ~/projects/my-app', context: '...' },
          { ... }
        ]
      },
      history: '最初的UNIX导航工具（1971年）...',
      parameters: [
        { flag: '路径', mnemonic: '目标位置', usage: '...' },
        { ... }
      ],
      alternatives: [
        { name: 'pushd/popd', note: '维护目录栈...' },
        { ... }
      ]
    },
    en: { /* 相同结构但英文内容 */ }
  },
  pipelineSpark: {
    label: '快速导航与任务执行 / Quick Navigation and Task',
    recipe: 'cd ~/projects && pwd && ls -1 | head -5',
    tip: '...'
  }
}
```

### 数据查询 API (`src/data/index.js`)

```javascript
// 按分类过滤
getByCategory(tab, category) // 返回该分类的所有命令

// 搜索
searchCommands(query, lang) // 跨语言关键词搜索

// 获取所有分类
getAllCategories() // 返回分类数组供Tab导航使用
```

### 组件架构

**模块化设计** - 每个组件职责清晰：

```
App.jsx
├── Header.jsx             # 标题 + 语言切换
├── MemoryFramework.jsx    # 4大记忆法介绍卡
├── TabNavigation.jsx      # 多维度Tab (场景/频率/难度/全部)
│   └── 动态生成子类别按钮
├── ModeSwitch.jsx         # 新手/专业模式切换
├── SearchBar.jsx          # 搜索栏 (实时过滤)
├── CommandList.jsx        # 命令卡片列表
│   └── CommandCard.jsx    # 单个命令卡片 (双语/双模式)
└── PipelineLab.jsx        # Pipeline圣代实验室
```

**关键组件**：
- `TabNavigation`：URL hash 路由 (`#/scenario/file-operations`) + 状态初始化函数避免 setState 警告
- `CommandCard`：条件渲染 `content[lang][mode]` 支持动态模式切换
- `SearchBar`：useCallback 优化，调用 `searchCommands(query, lang)` API

### 国际化 (i18n)

使用 `react-i18next` 支持无缝双语切换：

```
src/i18n/
├── config.js              # 初始化配置
└── locales/
    ├── zh/common.json    # 中文UI翻译
    └── en/common.json    # 英文UI翻译
```

UI 文本通过 `const { t } = useTranslation('common')` 和 `t('key')` 实现翻译。

### 样式系统

**Tailwind CSS v4** via `@tailwindcss/vite`：
- 玻璃态效果：`bg-white/80 backdrop-blur-sm border-white/70`
- 渐变背景：`bg-gradient-to-br from-rose-50 via-slate-50 to-sky-50`
- 阴影和圆角：`shadow-[0_20px_60px_rgba(...)] rounded-2xl`
- Flex 布局控制响应式设计

## 扩展指南

### 添加新命令 (20 → 50+)

1. **编辑 `src/data/commands.js`**：
   - 遵循完整 schema（见上面的数据模型）
   - 必须同时提供 `content.zh` 和 `content.en`
   - 使用现有分类值：`scenario`, `frequency`, `difficulty`

2. **验证代码质量**：
   ```bash
   npm run lint  # 检查 ESLint 错误
   npm run build # 验证编译成功
   ```

3. **无需修改其他文件**：
   - UI 组件自动适配
   - Tab 导航自动更新
   - 搜索功能自动生效

### 修改记忆法

- **中文系统**：舞台/冰淇淋比喻 (`theme: 'icecream-theater'`)
- **英文系统**：仓库/库存比喻 (`theme: 'warehouse-inventory'`)

修改 `content[lang].beginner.metaphor` 和 persona 以调整故事线。

## 技术决策

### URL 哈希路由 vs. React Router
- 使用 hash 路由使书签功能免费获得
- `TabNavigation` 通过 `useState(getInitialTab())` 初始化，避免 setState 在 effect 中导致的警告

### 双轨制模式 vs. 单一视图
- `CommandCard` 条件渲染 `content[lang][mode]` 支持灵活切换
- 新手：persona + story + metaphor（记忆钩子优先）
- 专业：useCases（实战场景优先）

### 数据驱动 vs. 硬编码
- 所有命令内容存储在 `src/data/commands.js`
- UI 组件完全无状态地读取数据
- 便于未来迁移到 CMS 或数据库

## ESLint 配置

使用平面配置 (`eslint.config.js`) 支持 React 19 hooks。忽略大写变量名（React 组件）。

## 文件清单

**不要修改**（自动生成）：
- `dist/` - 构建输出
- `node_modules/` - 依赖包

**关键业务文件**：
- `src/data/commands.js` - **主要编辑点**（添加新命令）
- `src/App.jsx` - 应用入口和全局状态
- `src/components/` - UI 组件（通常无需修改）
- `src/i18n/locales/` - UI 翻译文件
