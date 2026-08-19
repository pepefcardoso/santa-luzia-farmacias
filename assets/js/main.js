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

  const SCHEDULES = {
    1: [
      {
        day: "Segunda a sábado",
        ranges: [
          [480, 720],
          [810, 1200],
        ],
        label: "08h-12h e 13h30-20h",
      },
      { day: "Domingo", ranges: [], label: "Fechado" },
    ],
    2: [
      {
        day: "Segunda a sexta",
        ranges: [
          [480, 720],
          [810, 1110],
        ],
        label: "08h-12h e 13h30-18h30",
      },
      { day: "Sábado", ranges: [[480, 720]], label: "08h-12h" },
      { day: "Domingo", ranges: [], label: "Fechado" },
    ],
  };

  function ruleForDay(schedule, dow) {
    if (dow === 0) return schedule.find((r) => r.day === "Domingo");
    if (dow === 6)
      return (
        schedule.find((r) => r.day === "Sábado") ||
        schedule.find((r) => r.day.includes("sábado")) ||
        schedule[0]
      );
    return schedule[0];
  }

  function isOpenNow(unit) {
    const now = new Date();
    const dow = now.getDay();
    const minutes = now.getHours() * 60 + now.getMinutes();
    const rule = ruleForDay(SCHEDULES[unit], dow);
    return rule.ranges.some(
      ([open, close]) => minutes >= open && minutes < close,
    );
  }

  document.querySelectorAll(".open-badge").forEach((badge) => {
    const unit = badge.dataset.unit || "1";
    const open = isOpenNow(unit);
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

  ["1", "2"].forEach((unit) => {
    const list = document.getElementById(`hours-list-${unit}`);
    if (list) {
      list.innerHTML = SCHEDULES[unit]
        .map(
          (
            s,
          ) => `<div class="flex justify-between items-center px-5 py-4 text-sm">
        <span class="font-semibold text-brand-900">${s.day}</span>
        <span class="text-brand-600 font-bold">${s.label}</span>
      </div>`,
        )
        .join("");
    }
  });
});
