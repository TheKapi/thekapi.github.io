//Mobile navigation
const navList = document.querySelector(".menu__list");
const hamburger = document.querySelector(".menu__hamburger");
const close = document.querySelector(".menu__close");
const wrapper = document.querySelector(".wrapper");

hamburger.addEventListener("click", () => {
  navList.className = "menu__list--visible";
  wrapper.style.position = "fixed";
});

close.addEventListener("click", () => {
  navList.className = "menu__list";
  wrapper.style.position = "static";
});
