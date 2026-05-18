# WangAo-0 Personal Website

这是 `WangAo-0` 的 GitHub Pages 个人网站。当前版本使用 Astro 构建，定位为个人知识主页，重点放在自我介绍、技术 roadmap、技术博客、产品原型和联系方式。

公网地址：

```text
https://WangAo-0.github.io/
```

## 内容结构

- `src/pages/`：Astro 页面，包括首页、博客、roadmap、产品原型、联系方式。
- `src/content/blog/`：Markdown 博客文章。
- `src/data/site.ts`：站点信息、分类、roadmap、产品原型和联系方式。
- `public/media/`：二维码、图片等静态资源。
- `public/resume/`：PDF 简历。
- `agent.md`：给 agent 协作开发时使用的项目规则。
- `docs/`：开发原则、测试要求、媒体处理说明。

## 常用命令

```bash
npm install
npm run dev
npm run build
```

当前仓库仍兼容 GitHub Pages `/ (root)` 发布方式。发布前运行：

```bash
npm run export
```

这个命令会构建 Astro，并把 `dist/` 输出同步到仓库根目录。

## GitHub Pages 设置

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

## 后续维护建议

- 新文章放在 `src/content/blog/`，使用 Markdown。
- 首页的“个人博客”区块建议只放 3 到 6 篇最值得读的文章。
- 联系邮箱已设置为 `oliverdebox@163.com`。
- 微信二维码、资助二维码和视频平台链接目前是占位内容，后续在 `src/data/site.ts` 和 `public/media/` 中替换。
