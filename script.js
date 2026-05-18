const year = document.querySelector("#year");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const repoGrid = document.querySelector("#repoGrid");
const canvas = document.querySelector("#orbitCanvas");

year.textContent = new Date().getFullYear();

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  navLinks.classList.toggle("is-open");
});

navLinks.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
  }
});

async function loadRepos() {
  try {
    const response = await fetch("https://api.github.com/users/WangAo-0/repos?sort=updated&per_page=6");
    if (!response.ok) return;

    const repos = await response.json();
    const usefulRepos = repos
      .filter((repo) => !repo.fork)
      .slice(0, 6);

    if (!usefulRepos.length) return;

    repoGrid.innerHTML = usefulRepos
      .map((repo) => {
        const language = repo.language || "Project";
        const description = repo.description || "这个仓库还没有描述，可以在 GitHub 上补充一句清晰的项目说明。";

        return `
          <article class="project-card">
            <div class="project-topline">
              <span>${language}</span>
              <span>★ ${repo.stargazers_count}</span>
            </div>
            <h3>${escapeHtml(repo.name)}</h3>
            <p>${escapeHtml(description)}</p>
            <a href="${repo.html_url}" target="_blank" rel="noreferrer">查看仓库</a>
          </article>
        `;
      })
      .join("");
  } catch {
    // GitHub API 失败时保留页面内置的精选项目，不影响静态站访问。
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function drawOrbit() {
  if (!canvas) return;

  const context = canvas.getContext("2d");
  const pixelRatio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * pixelRatio;
  canvas.height = rect.height * pixelRatio;
  context.scale(pixelRatio, pixelRatio);

  const width = rect.width;
  const height = rect.height;
  const centerX = width * 0.52;
  const centerY = height * 0.44;
  const time = performance.now() * 0.00035;
  const colors = ["#126a72", "#c4552b", "#2e5aac", "#1f2933"];

  context.clearRect(0, 0, width, height);
  context.lineWidth = 1;

  for (let ring = 0; ring < 5; ring += 1) {
    const radius = 70 + ring * 42;
    context.beginPath();
    context.strokeStyle = `rgba(31, 41, 51, ${0.08 + ring * 0.025})`;
    context.ellipse(centerX, centerY, radius * 1.24, radius, time + ring * 0.34, 0, Math.PI * 2);
    context.stroke();
  }

  for (let dot = 0; dot < 32; dot += 1) {
    const orbit = 96 + (dot % 5) * 42;
    const angle = time * (1 + (dot % 4) * 0.08) + dot * 0.82;
    const x = centerX + Math.cos(angle) * orbit * 1.18;
    const y = centerY + Math.sin(angle) * orbit * 0.78;
    const size = 3 + (dot % 4);

    context.beginPath();
    context.fillStyle = colors[dot % colors.length];
    context.globalAlpha = 0.78;
    context.arc(x, y, size, 0, Math.PI * 2);
    context.fill();
  }

  context.globalAlpha = 1;
  context.fillStyle = "#1f2933";
  context.beginPath();
  context.arc(centerX, centerY, 52, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = "#fffaf1";
  context.font = "900 22px Inter, system-ui, sans-serif";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText("WA", centerX, centerY);

  requestAnimationFrame(drawOrbit);
}

loadRepos();
drawOrbit();
window.addEventListener("resize", drawOrbit);
