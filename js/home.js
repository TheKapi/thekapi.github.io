//fixes navigation change
window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    navList.className = "menu__list";
  }
});
