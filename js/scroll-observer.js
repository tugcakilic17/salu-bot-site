const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // observer.unobserve(entry.target); ← bunu kaldırdık
      } else {
        // görünür değilse .visible'ı kaldır
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in-on-scroll");
  elements.forEach((el) => observer.observe(el));
});
