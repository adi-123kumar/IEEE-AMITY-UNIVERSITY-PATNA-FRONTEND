// ================= Particles Background (same as team page) =================
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    size: { value: 3, random: true },
    move: { speed: 2, out_mode: "out" },
    color: { value: "#00d9ff" },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00d9ff",
      opacity: 0.4,
      width: 1,
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      repulse: { distance: 120, duration: 0.4 },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});

// ================= AOS (Scroll Animations) =================
AOS.init({
  duration: 1000,
  once: false, // animate each time it enters viewport
  offset: 80,
  easing: "ease-out-cubic",
});

// ================= Animated Counters =================
(function initCounters() {
  const counters = document.querySelectorAll(".counter");
  if (!counters.length) return;

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const animateValue = (el, end, duration = 1400) => {
    if (prefersReduced) {
      el.textContent = String(end);
      return;
    }
    const start = 0;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      el.textContent = String(value);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-target"), 10) || 0;
          animateValue(el, target);
          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.35 }
  );

  counters.forEach((c) => io.observe(c));
})();
