/* Particle Background */
particlesJS("particles-js", {
  particles: {
    number: { value: 100 },
    size: { value: 3 },
    color: { value: "#00bcd4" },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00bcd4",
      opacity: 0.4,
      width: 1,
    },
    move: { enable: true, speed: 2 },
  },
});

/* Scroll Animations */
const elements = document.querySelectorAll(".animate-on-scroll");
function checkScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  elements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) el.classList.add("active");
  });
}
window.addEventListener("scroll", checkScroll);
checkScroll();
