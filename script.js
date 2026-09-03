const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

function setMenuState(isOpen) {
  document.body.classList.toggle("menu-open", isOpen);
  mobileMenu.classList.toggle("is-open", isOpen);

  mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
}

menuToggle.addEventListener("click", () => {
  setMenuState(true);
});

menuClose.addEventListener("click", () => {
  setMenuState(false);
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setMenuState(false);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuState(false);
  }
});

const pillarGrid = document.querySelector(".pillar-grid");
const progressBar = document.querySelector(".carousel-progress span");

function updateCarouselProgress() {
  if (!pillarGrid || !progressBar) return;

  const maxScroll = pillarGrid.scrollWidth - pillarGrid.clientWidth;
  const percentage =
    maxScroll > 0 ? (pillarGrid.scrollLeft / maxScroll) * 80 : 0;

  progressBar.style.transform = `translateX(${percentage}%)`;
}

pillarGrid?.addEventListener("scroll", updateCarouselProgress, {
  passive: true,
});

window.addEventListener("resize", updateCarouselProgress);
updateCarouselProgress();

const video = document.querySelector(".hero video");

if (video) {
  video.addEventListener("error", () => {
    video.style.display = "none";
  });
}

if (window.lucide) {
  lucide.createIcons();
}
