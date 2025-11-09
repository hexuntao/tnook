# Tnook

基于 Turborepo、Vite、React 和 shadcn/ui 的现代化 monorepo 项目。

## 技术栈

- **Turborepo** - 高性能构建系统
- **Vite** - 下一代前端构建工具
- **React** - UI 框架
- **TypeScript** - 类型安全
- **shadcn/ui** - 高质量 UI 组件库
- **Tailwind CSS** - 实用优先的 CSS 框架
- **pnpm** - 快速、节省磁盘空间的包管理器

## 项目结构

```
tnook/
├── apps/
│   └── web/          # React + Vite 应用
├── packages/
│   ├── eslint-config/ # ESLint 配置
│   ├── ts-config/     # TypeScript 配置
│   └── utils/         # 共享工具函数
├── package.json
├── turbo.json
└── pnpm-workspace.yaml
```

## 开始使用

### 安装依赖

```bash
pnpm install
```

### 开发

```bash
# 启动所有应用
pnpm dev

# 启动特定应用
pnpm --filter @tnook/web dev
```

### 构建

```bash
pnpm build
```

### 代码检查

```bash
pnpm lint
```

### 格式化代码

```bash
pnpm format
```

## 添加 shadcn/ui 组件

项目已配置 shadcn/ui，你可以使用以下命令添加组件：

```bash
cd apps/web
npx shadcn-ui@latest add [component-name]
```

例如：

```bash
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
```

## 包管理

本项目使用 pnpm workspace 管理多个包：

- `@tnook/web` - 主应用
- `@tnook/utils` - 共享工具函数
- `@tnook/eslint-config` - ESLint 配置
- `@tnook/ts-config` - TypeScript 配置

## 许可证

MIT
