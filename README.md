# 冰的个人主页

托管在 GitHub Pages 上的静态站点。地址：<https://ayaseelibing.github.io/>

## 目录结构

```text
.
├── .nojekyll       # 空文件，禁用 Jekyll 处理（关键，勿删）
├── index.html      # 首页
├── 404.html# 404 页面（内联样式，不依赖外部 CSS）
├── css/
│   └── style.css   # 样式，含深色模式与响应式
└── js/
    ├── projects.js # 项目数据（数组）
    └── main.js     # 渲染 + 筛选逻辑
```

## 设计要点

**资源路径全部用相对路径**（`./css/style.css` 而非 `/css/style.css`）。
这样即使将来把站点迁到子路径（项目站 `ayaseelibing.github.io/<repo>/`），
也不会出现样式 404。

**深色模式跟随系统**。通过 `prefers-color-scheme` 实现，无需手动切换按钮，
也无需任何脚本。

**卡片用 `createElement` + `textContent` 渲染**，而非 `innerHTML` 字符串拼接——
仓库描述里若含 `<`、`&` 等字符不会被误解析为 HTML。

## 更新项目列表

数据在 `js/projects.js` 的 `PROJECTS` 数组。拉取最新仓库信息：

```bash
gh api "users/AyaseEli-Bing/repos?per_page=100&affiliation=owner" \
  --jq '.[] | select(.fork == false) | {
    name, lang: (.language // "None"), desc: .description,
    repo: .html_url, stars: .stargazers_count
  }'
```

把结果整理成数组对象替换即可，页面结构无需改动。

顶部「原创项目」的数字会自动按数组实际长度校正，不需手改。

## 本地预览

直接用浏览器打开 `index.html` 即可（纯静态，无构建步骤）。

需要本地HTTP 服务时：

```bash
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 本地部署步骤

```bash
git remote add origin git@github.com:AyaseEli-Bing/AyaseEli-Bing.github.io.git
git add .
git commit -m "feat: 个人主页"
git push -u origin main
```

推送后在仓库 **Settings → Pages** 配置：

- Source: `Deploy from a branch`
- Branch: `main`，Folder: `/ (root)`
- 点击 Save

等待 1–3 分钟构建完成即可访问。

## 注意事项

- **不要删除 `.nojekyll`**。删掉后 GitHub 会启用 Jekyll 处理，可能导致样式异常或目录 404。
- **文件名不要用中文或大写**。Linux 服务器区分大小写，且中文文件名在部分环境下会404。
- **文件名全小写**。`About.html` 和 `about.html` 是两个不同文件。
- 提交后刷新看不到变化是正常的，构建是异步的，等 1–3 分钟。