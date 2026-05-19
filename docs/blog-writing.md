# 博客写作模板说明

博客文章放在 `src/content/blog/`，每篇文章都是一个 Markdown 文件。新增文章时，先复制 `templates/blog-post.md`，再重命名为英文短横线文件名，例如：

```text
src/content/blog/network-timeout-debugging.md
```

## Frontmatter 字段

文章顶部 `---` 包起来的部分叫 frontmatter，用来控制标题、日期、分类、标签和是否发布。

```md
---
title: "网络问题排查笔记的写法"
description: "网络类文章可以围绕请求路径、DNS、TLS、代理、超时和抓包记录展开。"
pubDate: 2026-05-18
category: "network"
subcategory: "网络"
tags: ["网络", "调试", "排查"]
draft: false
---
```

- `title`：文章页的大标题。
- `description`：标题下方的简介，也会出现在文章列表中。
- `pubDate`：发布日期，格式建议用 `YYYY-MM-DD`。
- `category`：机器可读分类，必须使用项目支持的分类值。
- `subcategory`：页面上展示的中文目录名，可选。
- `tags`：文章页标题下方的小标签。
- `draft`：设为 `true` 时不会发布；准备上线后改为 `false` 或删除这一行。

## 可用分类

```text
network
database
system
ai-application
ai-inference
ai-training
prototype
thinking
```

常用 `subcategory` 示例：

```text
网络
数据库
系统
AI 应用 / 提示词
AI 应用 / Harness
AI 推理
AI 训练
产品原型 / Agent 程序员包
产品原型 / 炒股理财 Agent
产品原型 / 个性化信息
产品原型 / 多 Agent 协作
思考札记
```

## 新增文章流程

1. 复制 `templates/blog-post.md` 到 `src/content/blog/your-post-name.md`。
2. 修改 frontmatter，尤其是 `title`、`description`、`pubDate`、`category`、`subcategory` 和 `tags`。
3. 正文按模板补充内容。
4. 本地运行 `npm run export`，确认 Astro 检查和构建通过。
5. 提交并推送到 GitHub，等待 GitHub Pages 自动部署。

## 图片和视频

图片、视频等静态资源建议放在 `public/media/blog/`，文章中使用以 `/media/blog/` 开头的绝对路径。

```md
![排查链路图](/media/blog/network-debug-flow.png)
```

```html
<video controls src="/media/blog/demo.mp4"></video>
```

如果资源很大，建议不要直接放进仓库，可以使用图床、对象存储或视频平台链接。
