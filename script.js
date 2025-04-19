const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.remove("translate-x-full");
  navMenu.classList.remove("hidden");
});

menuClose.addEventListener("click", () => {
  navMenu.classList.add("translate-x-full");
  setTimeout(() => {
    navMenu.classList.add("hidden");
  }, 300);
});
