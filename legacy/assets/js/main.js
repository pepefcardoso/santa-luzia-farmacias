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

  document.querySelectorAll(".js-popover-toggle").forEach((toggle) => {
    const menu = document.getElementById(toggle.dataset.target);
    if (!menu) return;
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = !menu.classList.contains("hidden");
      document
        .querySelectorAll(".js-popover")
        .forEach((m) => m.classList.add("hidden"));
      document
        .querySelectorAll(".js-popover-toggle")
        .forEach((t) => t.setAttribute("aria-expanded", "false"));
      if (!isOpen) {
        menu.classList.remove("hidden");
        toggle.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (
      !e.target.closest(".js-popover") &&
      !e.target.closest(".js-popover-toggle")
    ) {
      document
        .querySelectorAll(".js-popover")
        .forEach((m) => m.classList.add("hidden"));
      document
        .querySelectorAll(".js-popover-toggle")
        .forEach((t) => t.setAttribute("aria-expanded", "false"));
    }
  });

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
    dot.classList.toggle("bg-accent-600", open);
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

  if (typeof TESTIMONIALS !== "undefined" && TESTIMONIALS.length) {
    const UNIT_LABEL = { 1: "Unidade KM 60", 2: "Unidade Morrotes" };
    const track = document.getElementById("testimonial-carousel");
    const dotsWrap = document.getElementById("testimonial-dots");

    if (track && dotsWrap) {
      track.innerHTML = `<div id="testimonial-track" class="flex transition-transform duration-300">
        ${TESTIMONIALS.map(
          (
            t,
          ) => `<div class="w-full shrink-0 bg-brand-50 rounded-2xl p-5 border border-brand-100 text-left">
            <div class="text-brand-500 text-sm mb-1">${"★".repeat(t.rating)}${"☆".repeat(5 - t.rating)}</div>
            ${t.text ? `<p class="text-sm text-ink-muted mb-3">${t.text}</p>` : ""}
            <p class="text-xs font-bold text-brand-700">${t.name}</p>
            <p class="text-xs text-ink-muted">${UNIT_LABEL[t.unit] || ""}</p>
          </div>`,
        ).join("")}
      </div>`;

      dotsWrap.innerHTML = TESTIMONIALS.map(
        (_, i) =>
          `<button class="w-2 h-2 rounded-full bg-brand-200 testimonial-dot" data-index="${i}" aria-label="Avaliação ${i + 1}"></button>`,
      ).join("");

      const slides = track.querySelectorAll("#testimonial-track > div");
      const dots = dotsWrap.querySelectorAll(".testimonial-dot");
      const slideTrack = document.getElementById("testimonial-track");
      let current = 0;

      function goTo(i) {
        current = (i + TESTIMONIALS.length) % TESTIMONIALS.length;
        slideTrack.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach((d, idx) =>
          d.classList.toggle("bg-brand-600", idx === current),
        );
        dots.forEach((d, idx) =>
          d.classList.toggle("bg-brand-200", idx !== current),
        );
      }

      dots.forEach((d) =>
        d.addEventListener("click", () => goTo(Number(d.dataset.index))),
      );

      let auto = setInterval(() => goTo(current + 1), 5000);
      track.addEventListener("mouseenter", () => clearInterval(auto));
      track.addEventListener("mouseleave", () => {
        auto = setInterval(() => goTo(current + 1), 5000);
      });

      goTo(0);
    }
  }
});
