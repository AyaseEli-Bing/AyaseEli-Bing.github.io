/**
 * 项目清单数据。
 *
 * 数据来自 GitHub API（repos?affiliation=owner）于 2026-10-07 的快照，
 * 已剔除 fork（buffa / up-for-grabs.net / claude-hud / stellar-splitter /
 * 3x-ui / blindbucket / capslight-workbuddy / first-contributions）。
 *
 * desc 刻意保持在一行以内：卡片只承担"让人想点进去"的作用，
 * 细节留给仓库 README。若要更新：
 *   gh api "users/<登录名>/repos?per_page=100&affiliation=owner" \
 *     --jq ".[] | select(.fork==false) | {...}"
 * 然后替换本数组即可，页面结构无需改动。
 */
const PROJECTS = [
  {
    name: "Mac-Arch-Installer",
    lang: "Shell",
    desc: "Parallels 虚拟机里一键装 Arch Linux ARM。",
    repo: "https://github.com/AyaseEli-Bing/Mac-Arch-Installer",
    stars: 29,
    tags: ["安装脚本", "虚拟机"],
    featured: true
  },
  {
    name: "xnumeter",
    lang: "Swift",
    desc: "零依赖系统监视器，TUI + 菜单栏双形态。",
    repo: "https://github.com/AyaseEli-Bing/xnumeter",
    stars: 1,
    tags: ["Swift", "TUI"],
    featured: true
  },
  {
    name: "heatpeek",
    lang: "Swift",
    desc: "菜单栏读数：SoC 温度、GPU 功耗与风扇转速。",
    repo: "https://github.com/AyaseEli-Bing/heatpeek",
    stars: 0,
    tags: ["Swift", "菜单栏"],
    featured: true
  },
  {
    name: "bilibili-spider",
    lang: "Python",
    desc: "B 站投稿数据检测，导出 CSV 与 Excel。",
    repo: "https://github.com/AyaseEli-Bing/bilibili-spider",
    stars: 0,
    tags: ["Python", "零依赖"],
    featured: true
  },
  {
    name: "mac-cleaner",
    lang: "Python",
    desc: "磁盘清理：先预览、再确认、可恢复。",
    repo: "https://github.com/AyaseEli-Bing/mac-cleaner",
    stars: 0,
    tags: ["Python", "系统工具"],
    featured: false
  },
  {
    name: "macos-system-data-cleaner",
    lang: "Shell",
    desc: "「系统数据」只读盘点与分级清理。",
    repo: "https://github.com/AyaseEli-Bing/macos-system-data-cleaner",
    stars: 0,
    tags: ["Shell", "系统清理"],
    featured: false
  },
  {
    name: "lumen-rss",
    lang: "JavaScript",
    desc: "本地优先的 RSS 阅读器，零外部依赖。",
    repo: "https://github.com/AyaseEli-Bing/lumen-rss",
    stars: 0,
    tags: ["JavaScript", "RSS"],
    featured: false
  },
  {
    name: "grade-manager",
    lang: "C",
    desc: "Tauri 离线成绩管理，排名与双维度统计。",
    repo: "https://github.com/AyaseEli-Bing/grade-manager",
    stars: 0,
    tags: ["C", "Tauri"],
    featured: false
  },
  {
    name: "chromatic-defense",
    lang: "Python",
    desc: "8 语言混搭的 macOS 原生塔防游戏。",
    repo: "https://github.com/AyaseEli-Bing/chromatic-defense",
    stars: 0,
    tags: ["游戏", "多语言"],
    featured: false
  },
  {
    name: "capslight-qoder",
    lang: "Shell",
    desc: "用 Caps Lock LED 显示 agent 运行状态。",
    repo: "https://github.com/AyaseEli-Bing/capslight-qoder",
    stars: 0,
    tags: ["Shell", "HID"],
    featured: false
  },
  {
    name: "Markdown-Format-Kit",
    lang: "None",
    desc: "中文技术内容的排版规范与发布流程。",
    repo: "https://github.com/AyaseEli-Bing/Markdown-Format-Kit",
    stars: 0,
    tags: ["文档", "规范"],
    featured: false
  },
  {
    name: "student-score-system",
    lang: "C",
    desc: "C 语言成绩管理系统，数组 + 结构体练习。",
    repo: "https://github.com/AyaseEli-Bing/student-score-system",
    stars: 0,
    tags: ["C", "练习"],
    featured: false
  },
  {
    name: "snake-game",
    lang: "Python",
    desc: "贪吃蛇，tkinter 单文件实现。",
    repo: "https://github.com/AyaseEli-Bing/snake-game",
    stars: 0,
    tags: ["Python", "小游戏"],
    featured: false
  },
  {
    name: "order-pricing-ci-demo",
    lang: "JavaScript",
    desc: "订单计价示例，配套五阶段 CI/CD 流水线。",
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