const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuIcon.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuIcon.classList.remove("active");
  });
});

const serviceCards = document.querySelectorAll(".service-card");

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 200); // ефект появи по черзі
      }
    });
  },
  { threshold: 0.2 },
);

serviceCards.forEach((card) => observer2.observe(card));

/* === КАРУСЕЛЬ ВІДГУКІВ === */
const track = document.querySelector(".carousel-track");
const items = Array.from(document.querySelectorAll(".carousel-item"));
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let index = 0;
let itemsPerView = window.innerWidth < 768 ? 1 : 5;

function updateCarousel() {
  itemsPerView = window.innerWidth < 768 ? 1 : 5;

  const move = -index * (track.clientWidth / itemsPerView);
  track.style.transform = `translateX(${move}px)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % items.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
});

window.addEventListener("resize", updateCarousel);

updateCarousel();

/* FAQ accordion */
document.querySelectorAll(".faq-item").forEach((item) => {
  const btn = item.querySelector(".faq-question");

  btn.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

const priceItems = document.querySelectorAll(".price-item");

priceItems.forEach((item) => {
  const head = item.querySelector(".price-head");
  const icon = item.querySelector(".price-icon");

  head.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");

    priceItems.forEach((el) => {
      el.classList.remove("active");
      el.querySelector(".price-icon").textContent = "+";
    });

    if (!isOpen) {
      item.classList.add("active");
      icon.textContent = "✕";
    }
  });
});
