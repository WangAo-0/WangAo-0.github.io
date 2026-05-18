# 开发原则

## 内容优先

这个网站不是模板展示站，而是个人知识主页。新增功能前先问：它是否帮助访问者理解 WangAo-0 的技术路线、博客内容、产品原型或联系方式。

## 结构化数据优先

重复内容应放到 `src/data/site.ts`，例如产品原型、roadmap、联系方式和外部链接。页面负责展示，数据负责维护。

## Markdown 优先

文章使用 Markdown 管理，路径为 `src/content/blog/`。分类目前包括：

- `network`
- `database`
- `system`
- `ai-application`
- `ai-inference`
- `ai-training`
- `prototype`
- `thinking`

AI 应用的细分主题可以写在 `subcategory`，例如 `AI 应用 / 提示词` 或 `AI 应用 / Harness`。

## 静态部署优先

项目应保持可静态构建，避免引入需要服务器运行的能力。适合 GitHub Pages 的能力优先。
