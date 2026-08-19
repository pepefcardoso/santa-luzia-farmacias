document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get("utm_source");
  if (utmSource) {
    document.querySelectorAll(".js-wa-cta").forEach((el) => {
      el.href += (el.href.includes("?") ? "&" : "?") + "ref=" + utmSource;
    });
  }

  const header = document.getElementById("site-header");
  window.addEventListener(
    "scroll",
    () => header.classList.toggle("shadow-sm", window.scrollY > 8),
    { passive: true },
  );

  const fabToggle = document.getElementById("wa-fab-toggle");
  const fabMenu = document.getElementById("wa-fab-menu");
  if (fabToggle && fabMenu) {
    fabToggle.addEventListener("click", () => {
      const isOpen = !fabMenu.classList.contains("hidden");
      fabMenu.classList.toggle("hidden");
      fabToggle.setAttribute("aria-expanded", String(!isOpen));
    });
    document.addEventListener("click", (e) => {
      if (!fabMenu.contains(e.target) && !fabToggle.contains(e.target)) {
        fabMenu.classList.add("hidden");
        fabToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const SCHEDULE = [
    { day: "Segunda a sexta", open: 480, close: 1200, label: "08h às 20h" },
    { day: "Sábado", open: 480, close: 1080, label: "08h às 18h" },
    { day: "Domingo", open: null, close: null, label: "Fechado" },
  ];

  function isOpenNow() {
    const now = new Date();
    const dow = now.getDay();
    const minutes = now.getHours() * 60 + now.getMinutes();
    const rule =
      dow === 0 ? SCHEDULE[2] : dow === 6 ? SCHEDULE[1] : SCHEDULE[0];
    return rule.open !== null && minutes >= rule.open && minutes < rule.close;
  }

  const open = isOpenNow();
  document.querySelectorAll(".open-badge").forEach((badge) => {
    const dot = badge.querySelector(".open-dot");
    const text = badge.querySelector(".open-text");
    badge.classList.toggle("bg-brand-100", open);
    badge.classList.toggle("text-brand-700", open);
    badge.classList.toggle("bg-gray-100", !open);
    badge.classList.toggle("text-gray-500", !open);
    dot.classList.toggle("bg-brand-500", open);
    dot.classList.toggle("animate-pulse", open);
    dot.classList.toggle("bg-gray-400", !open);
    text.textContent = open ? "Aberto agora" : "Fechado no momento";
  });

  const list = document.getElementById("hours-list");
  if (list) {
    list.innerHTML = SCHEDULE.map(
      (s) => `<div class="flex justify-between items-center px-5 py-4 text-sm">
        <span class="font-semibold text-brand-900">${s.day}</span>
        <span class="text-brand-600 font-bold">${s.label}</span>
      </div>`,
    ).join("");
  }
});
