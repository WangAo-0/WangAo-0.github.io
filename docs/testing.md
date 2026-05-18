# 测试与验收

## 必跑命令

```bash
npm run build
```

这会执行 Astro 内容检查和静态构建。

## 推荐检查

```bash
npm run dev
```

打开本地地址后检查：

- 首页是否展示个人简介、roadmap、博客和产品原型。
- `/blog/` 是否列出文章。
- `/blog/github-pages-site/` 等文章详情页是否可打开。
- `/contact/` 是否展示邮箱、微信二维码占位图、资助二维码占位图和自媒体平台入口。
- 手机宽度下文字是否溢出或重叠。

## 发布前检查

如果继续使用 GitHub Pages `/ (root)` 发布方式，发布前运行：

```bash
npm run export
```

然后提交源码和同步到根目录的构建产物。
