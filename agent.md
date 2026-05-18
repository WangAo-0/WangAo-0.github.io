# Agent 开发准则

这个仓库是 `WangAo-0.github.io` 的个人网站，当前技术栈是 Astro + Markdown 内容集合。Agent 在修改项目时应遵守以下规则。

## 目标定位

- 网站面向公开访问者，核心内容是个人简介、技术 roadmap、个人博客、产品原型、联系方式和自媒体入口。
- 博客文章优先使用 Markdown，放在 `src/content/blog/`。
- 页面结构优先使用 Astro 组件和 `src/data/site.ts` 中的结构化数据。

## 开发原则

- 保持静态站点优先，不引入数据库和服务端运行时。
- 新增页面时复用 `src/layouts/BaseLayout.astro`。
- 新增文章时必须包含 frontmatter：`title`、`description`、`pubDate`、`category`、`tags`。
- 不把真实隐私信息硬编码到多个文件里；邮箱、社交链接等优先放在 `src/data/site.ts`。
- 图片和视频放到 `public/`，文章里用根路径引用，例如 `/media/example.png`。

## 测试要求

每次修改后至少运行：

```bash
npm run build
```

如果修改了样式或布局，还应本地预览：

```bash
npm run dev
```

然后检查首页、博客目录、文章详情页、联系方式页面在桌面和手机宽度下是否可读。

## 部署原则

当前仓库为了兼容 GitHub Pages `/ (root)` 发布方式，使用：

```bash
npm run export
```

它会先构建 Astro，再把 `dist/` 中的静态产物同步到仓库根目录。以后如果切换到 GitHub Actions，可以只部署 `dist/`，不再提交构建产物。
