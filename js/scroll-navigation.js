const sections = [
  "hero",
  "meet-salubot",
  "value",
  "features",
  "compare",
  "pricing",
  "contact"
];

let currentIndex = 0;
let isScrolling = false;

const SCROLL_THRESHOLD = 25; // daha az yap = daha hassas (örnek: 20–40 arası önerilir)

window.addEventListener("wheel", (e) => {
  if (isScrolling) return;

  if (Math.abs(e.deltaY) < SCROLL_THRESHOLD) return; // kaydırma küçükse geç

  isScrolling = true;

  if (e.deltaY > 0 && currentIndex < sections.length - 1) {
    currentIndex++;
  } else if (e.deltaY < 0 && currentIndex > 0) {
    currentIndex--;
  }

  const target = document.getElementById(sections[currentIndex]);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }

  setTimeout(() => {
    isScrolling = false;
  }, 1000);
}, { passive: true });

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  let closestSection = 0;
  let minDistance = Infinity;

  sections.forEach((id, index) => {
    const el = document.getElementById(id);
    if (el) {
      const distance = Math.abs(el.offsetTop - scrollY);
      if (distance < minDistance) {
        closestSection = index;
        minDistance = distance;
      }
    }
  });

  currentIndex = closestSection;
});

