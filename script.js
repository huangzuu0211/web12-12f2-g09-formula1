// -------------------------
// MOBILE MENU
// -------------------------
function toggleMenu() {
  const nav = document.getElementById("mobileNav");
  nav.classList.toggle("w3-show");
}

// -------------------------
// MODAL IMAGE VIEWER
// -------------------------
function openModal(img) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const caption = document.getElementById("modalCaption");

  modal.style.display = "block";
  modalImg.src = img.src;
  caption.textContent = img.alt || "";
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}

// -------------------------
// CAROUSEL
// -------------------------
let currentSlide = 0;
let slideTimer = null;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".dot");

  if (slides.length === 0) return;

  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  currentSlide = index;

  slides.forEach((s, i) => {
    s.style.display = i === currentSlide ? "block" : "none";
  });

  dots.forEach((d, i) => {
    d.classList.toggle("active", i === currentSlide);
  });
}

function changeSlide(step) {
  showSlide(currentSlide + step);
  resetAutoSlide();
}

function goToSlide(index) {
  showSlide(index);
  resetAutoSlide();
}

// Auto slide
function startAutoSlide() {
  slideTimer = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
}

function resetAutoSlide() {
  if (slideTimer) clearInterval(slideTimer);
  startAutoSlide();
}

// INIT
document.addEventListener("DOMContentLoaded", () => {
  showSlide(0);
  startAutoSlide();
});
