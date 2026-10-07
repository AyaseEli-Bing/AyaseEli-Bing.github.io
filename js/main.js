/**
 * 站点交互逻辑：渲染项目卡片 + 语言筛选。
 * 依赖同目录下的 projects.js（其中定义 PROJECTS 数组）。
 */
(function () {
  "use strict";

  const grid = document.getElementById("project-grid");
  if (!grid || typeof PROJECTS === "undefined") return;

  /**
   * 构建单个项目卡片。
   * 用 createElement + textContent 而非 innerHTML 拼接，
   * 避免仓库描述里的特殊字符被当作 HTML 解析。
   */
  function createCard(project) {
    const card = document.createElement("a");
    card.className = "project-card";
    card.href = project.repo;
    card.target = "_blank";
    card.rel = "noopener noreferrer";

    const head = document.createElement("div");
    head.className = "project-head";

    const name = document.createElement("span");
    name.className = "project-name";
    name.textContent = project.name;

    const lang = document.createElement("span");
    lang.className = "project-lang";
    lang.textContent = project.lang || "—";

    head.append(name, lang);

    const desc = document.createElement("p");
    desc.className = "project-desc";
    desc.textContent = project.desc || "";

    const tags = document.createElement("div");
    tags.className = "project-tags";
    (project.tags || []).forEach(function (t) {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = t;
      tags.appendChild(tag);
    });

    card.append(head, desc, tags);
    return card;
  }

  function render(list) {
    grid.textContent = "";

    if (!list.length) {
      const empty = document.createElement("p");
      empty.className = "project-empty";
      empty.textContent = "该语言下暂无项目。";
      grid.appendChild(empty);
      return;
    }

    const frag = document.createDocumentFragment();
    list.forEach(function (p) { frag.appendChild(createCard(p)); });
    grid.appendChild(frag);
  }

  // 按语言筛选
  const buttons = Array.prototype.slice.call(
    document.querySelectorAll(".filter-btn")
  );

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");

      const filter = btn.dataset.filter;
      if (filter === "all") {
        render(PROJECTS);
      } else {
        render(
          PROJECTS.filter(function (p) { return p.lang === filter; })
        );
      }
    });
  });

  // 精选项目排在前面，其余按名称排序
  const ordered = PROJECTS.slice().sort(function (a, b) {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return a.name.localeCompare(b.name);
  });

  render(ordered);

  // 顶部统计数字用实际渲染数量校正，避免手写数据与数组不一致
  const statProjects = document.getElementById("stat-projects");
  if (statProjects) statProjects.textContent = String(PROJECTS.length);
})();