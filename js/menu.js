//Navigation
const navList = document.querySelector(".menu__list");
const hamburger = document.querySelector(".menu__hamburger");
const close = document.querySelector(".menu__close");
const wrapper = document.querySelector(".wrapper");

hamburger.addEventListener("click", () => {
  navList.style.transform = "translateY(0)";
  wrapper.style.position = "fixed";
});

close.addEventListener("click", () => {
  navList.style.transform = "translateY(-100%)";
  wrapper.style.position = "static";
});
