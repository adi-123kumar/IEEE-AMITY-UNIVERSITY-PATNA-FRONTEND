// Scroll-triggered animations
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
});

// Lightbox functionality
function openLightbox(img) {
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = img.src;
  document.getElementById("caption").innerText = img.alt;
}
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
