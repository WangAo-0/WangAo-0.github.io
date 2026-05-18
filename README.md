# WangAo-0 Personal Website

这是为 `WangAo-0` 准备的 GitHub Pages 个人网站。它是纯静态页面，不需要构建工具，适合直接发布到 `https://WangAo-0.github.io/`。

## 已完成内容

- 响应式个人主页：介绍、项目、技能、经历、联系入口。
- 自动读取 `WangAo-0` 的 GitHub 公开仓库并展示最近更新的项目。
- 无外部依赖，只有 `index.html`、`styles.css`、`script.js`。
- 已加入 `.nojekyll`，避免 GitHub Pages 按 Jekyll 处理静态文件。

## 发布步骤

1. 在 GitHub 新建仓库，仓库名必须是 `WangAo-0.github.io`。
2. 把本地文件提交并推送到该仓库的默认分支。
3. 进入仓库的 `Settings -> Pages`。
4. Source 选择 `Deploy from a branch`，Branch 选择 `main` 或 `master`，Folder 选择 `/ (root)`。
5. 等待 GitHub Pages 部署完成，访问 `https://WangAo-0.github.io/`。

## 后续替换建议

- 联系邮箱已设置为 `oliverdebox@163.com`，如需更换可修改 `index.html` 里的 `mailto:` 链接。
- 把“技能方向”和“当前计划”改成你的真实经历。
- 为重点项目补充 README、截图和在线演示链接，网站会更有说服力。
