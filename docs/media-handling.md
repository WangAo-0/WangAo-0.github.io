# 博客图片和视频如何处理

博客里如果要让访问网站的人直接看到图片和视频，常见做法是把媒体文件作为静态资源发布，或者嵌入第三方平台。

## 图片

适合直接放进仓库：

```text
public/media/my-diagram.png
```

Markdown 中这样引用：

```markdown
![架构图](/media/my-diagram.png)
```

构建后访问者会直接在网页中看到图片。

建议：

- 截图、架构图、二维码适合放 `public/media/`。
- 文件名使用英文、数字和短横线。
- 大图尽量压缩，优先用 `.webp`、`.jpg` 或优化后的 `.png`。

## 视频

小视频可以放进仓库：

```text
public/videos/demo.mp4
```

Markdown 中可以直接写 HTML：

```html
<video controls src="/videos/demo.mp4"></video>
```

但不建议把很大的视频直接放 GitHub 仓库。更成熟的方式是：

- 上传到 Bilibili、YouTube 或其他视频平台。
- 在文章中嵌入 iframe 或放外链。
- 对产品演示可以同时保留一张封面图和视频链接。

## 简历 PDF 和二维码

简历 PDF 推荐放：

```text
public/resume/WangAo-0-resume.pdf
```

二维码推荐放：

```text
public/media/wechat-qr.png
public/media/sponsor-qr.png
```

当前项目里已经有 SVG 占位图，替换为真实图片后保持路径不变即可。
