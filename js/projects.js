/**
 * 项目清单数据。
 *
 * 数据来自 GitHub API（repos?affiliation=owner）于 2026-10-07 的快照，
 * 已剔除 fork（buffa / up-for-grabs.net / claude-hud / stellar-splitter /
 * 3x-ui / blindbucket / capslight-workbuddy / first-contributions）。
 *
 * 若要更新：重新执行
 *   gh api "users/<登录名>/repos?per_page=100&affiliation=owner" \
 *     --jq ".[] | select(.fork==false) | {...}"
 * 然后替换本数组即可，页面结构无需改动。
 */
const PROJECTS = [
  {
    name: "Mac-Arch-Installer",
    lang: "Shell",
    desc: "Mac 虚拟机懒人包：在 Apple Silicon + Parallels Desktop 上自动安装 Arch Linux ARM（官方 ISO 仅 x86_64，无法直接启动）。",
    repo: "https://github.com/AyaseEli-Bing/Mac-Arch-Installer",
    stars: 29,
    tags: ["安装脚本", "虚拟机", "Arch Linux"],
    featured: true
  },
  {
    name: "xnumeter",
    lang: "Swift",
    desc: "零依赖 macOS 系统监视器：终端 TUI + 菜单栏面板，直读 XNU 内核接口（host_statistics、sysctl、getfsstat、proc_listpids）。",
    repo: "https://github.com/AyaseEli-Bing/xnumeter",
    stars: 1,
    tags: ["Swift", "TUI", "系统监控"],
    featured: true
  },
  {
    name: "heatpeek",
    lang: "Swift",
    desc: "菜单栏读数：Apple Silicon SoC 温度、GPU 利用率与功耗、风扇转速。零依赖，不需要 root。",
    repo: "https://github.com/AyaseEli-Bing/heatpeek",
    stars: 0,
    tags: ["Swift", "菜单栏", "硬件监控"],
    featured: true
  },
  {
    name: "bilibili-spider",
    lang: "Python",
    desc: "B 站 UP 主投稿数据检测：抓取视频元数据 + 汇总统计 + 时长与发布时间分布，导出 CSV 与 Excel。纯标准库，零运行时依赖。",
    repo: "https://github.com/AyaseEli-Bing/bilibili-spider",
    stars: 0,
    tags: ["Python", "数据统计", "零依赖"],
    featured: true
  },
  {
    name: "mac-cleaner",
    lang: "Python",
    desc: "macOS 磁盘清理工具：先预览、再确认、可恢复地清理系统缓存 / 日志 / 临时文件 / 回收站残留。13 个可清理类目 + 五道安全关卡。",
    repo: "https://github.com/AyaseEli-Bing/mac-cleaner",
    stars: 0,
    tags: ["Python", "系统工具", "安全优先"],
    featured: false
  },
  {
    name: "macos-system-data-cleaner",
    lang: "Shell",
    desc: "macOS「系统数据」扫描与安全清理：只读盘点 + 三级风险分级 + 逐项确认后才执行。",
    repo: "https://github.com/AyaseEli-Bing/macos-system-data-cleaner",
    stars: 0,
    tags: ["Shell", "系统清理", "只读扫描"],
    featured: false
  },
  {
    name: "lumen-rss",
    lang: "JavaScript",
    desc: "本地优先的 RSS / Atom 订阅阅读器，零外部依赖（Node 内置 SQLite + 原生 ESM 前端）。",
    repo: "https://github.com/AyaseEli-Bing/lumen-rss",
    stars: 0,
    tags: ["JavaScript", "RSS", "本地优先"],
    featured: false
  },
  {
    name: "grade-manager",
    lang: "C",
    desc: "基于 Tauri v2 的离线班级成绩管理桌面应用：多科成绩、自定义科目、班级排名、双维度统计、JSON / CSV 导入导出。",
    repo: "https://github.com/AyaseEli-Bing/grade-manager",
    stars: 0,
    tags: ["C", "Tauri", "桌面应用"],
    featured: false
  },
  {
    name: "chromatic-defense",
    lang: "Python",
    desc: "8 语言混搭的 macOS 原生塔防游戏（Swift · Python · C · Rust · Go · JS · Lua · Shell）。",
    repo: "https://github.com/AyaseEli-Bing/chromatic-defense",
    stars: 0,
    tags: ["游戏", "多语言", "macOS"],
    featured: false
  },
  {
    name: "capslight-qoder",
    lang: "Shell",
    desc: "把 Caps Lock 键的 LED 用作 agent CLI 的运行状态指示灯：工作中闪烁，完成后常亮。不改变 Caps Lock 修饰键行为。",
    repo: "https://github.com/AyaseEli-Bing/capslight-qoder",
    stars: 0,
    tags: ["Shell", "HID", "状态指示"],
    featured: false
  },
  {
    name: "Markdown-Format-Kit",
    lang: "None",
    desc: "中文技术内容的 Markdown 排版规范与内容整理发布流程。",
    repo: "https://github.com/AyaseEli-Bing/Markdown-Format-Kit",
    stars: 0,
    tags: ["文档", "规范"],
    featured: false
  },
  {
    name: "student-score-system",
    lang: "C",
    desc: "C 语言学生成绩管理系统（数组 + 结构体 + 函数，含录入 / 查看 / 统计 / 查询 / 修改 / 删除 / 排名）。",
    repo: "https://github.com/AyaseEli-Bing/student-score-system",
    stars: 0,
    tags: ["C", "练习"],
    featured: false
  },
  {
    name: "snake-game",
    lang: "Python",
    desc: "经典贪吃蛇小游戏，Python 标准库 tkinter 实现，单文件零依赖。",
    repo: "https://github.com/AyaseEli-Bing/snake-game",
    stars: 0,
    tags: ["Python", "小游戏"],
    featured: false
  },
  {
    name: "order-pricing-ci-demo",
    lang: "JavaScript",
    desc: "Node.js 订单计价示例项目，配套 setup → install → build → test → deploy 五阶段 GitHub Actions CI/CD 流水线。",
    repo: "https://github.com/AyaseEli-Bing/order-pricing-ci-demo",
    stars: 0,
    tags: ["JavaScript", "CI/CD"],
    featured: false
  },
  {
    name: "orbit-salvage",
    lang: "HTML",
    desc: "HTML 实验项目。",
    repo: "https://github.com/AyaseEli-Bing/orbit-salvage",
    stars: 0,
    tags: ["HTML"],
    featured: false
  }
];