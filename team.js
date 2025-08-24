// Particles.js Background
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

// AOS (Scroll Animations)
AOS.init({
  duration: 1000,
  once: false,
  offset: 80,
  easing: "ease-out-cubic",
});
