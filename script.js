const year = document.querySelector("#year");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const canvas = document.querySelector("#orbitCanvas");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
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
  const centerY = height * 0.43;
  const time = performance.now() * 0.00032;
  const colors = ["#126a72", "#b64d2a", "#3158a6", "#1f2933"];
  const labels = ["note", "code", "idea", "ship", "review"];

  context.clearRect(0, 0, width, height);
  context.lineWidth = 1;

  for (let ring = 0; ring < 5; ring += 1) {
    const radius = 74 + ring * 42;
    context.beginPath();
    context.strokeStyle = `rgba(31, 41, 51, ${0.08 + ring * 0.02})`;
    context.ellipse(centerX, centerY, radius * 1.22, radius, time + ring * 0.3, 0, Math.PI * 2);
    context.stroke();
  }

  for (let dot = 0; dot < 30; dot += 1) {
    const orbit = 100 + (dot % 5) * 42;
    const angle = time * (1 + (dot % 4) * 0.08) + dot * 0.84;
    const x = centerX + Math.cos(angle) * orbit * 1.15;
    const y = centerY + Math.sin(angle) * orbit * 0.78;
    const size = 3 + (dot % 4);

    context.beginPath();
    context.fillStyle = colors[dot % colors.length];
    context.globalAlpha = 0.76;
    context.arc(x, y, size, 0, Math.PI * 2);
    context.fill();
  }

  context.globalAlpha = 1;
  context.fillStyle = "#1f2933";
  context.beginPath();
  context.arc(centerX, centerY, 54, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = "#ffffff";
  context.font = "900 22px Inter, system-ui, sans-serif";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText("WA", centerX, centerY - 8);

  context.font = "700 12px Inter, system-ui, sans-serif";
  context.fillStyle = "rgba(255,255,255,0.78)";
  context.fillText(labels[Math.floor(time * 6) % labels.length], centerX, centerY + 18);

  requestAnimationFrame(drawOrbit);
}

drawOrbit();
window.addEventListener("resize", drawOrbit);
