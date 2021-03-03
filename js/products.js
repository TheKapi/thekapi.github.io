//Gender select
const images = document.querySelectorAll(".libary__item");
const women = document.querySelector(".libary__women");
const men = document.querySelector(".libary__men");
const all = document.querySelector(".libary__all");
let genderText = document.querySelectorAll(".libary__selected");

for (let i = 0; i < images.length; i++) {
  if (images[i].dataset.gender == "men") {
    genderText[i].innerHTML = "men";
  } else {
    genderText[i].innerHTML = "women";
  }
}

all.addEventListener("click", () => {
  all.style.color = "#f5a383";
  women.style.color = "#f06e3c";
  men.style.color = "#f06e3c";

  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "flex";
  }
});

women.addEventListener("click", () => {
  women.style.color = "#f5a383";
  men.style.color = "#f06e3c";
  all.style.color = "#f06e3c";

  for (let i = 0; i < images.length; i++) {
    if (images[i].dataset.gender == "women") {
      images[i].style.display = "flex";
    } else {
      images[i].style.display = "none";
    }
  }
});

men.addEventListener("click", () => {
  men.style.color = "#f5a383";
  women.style.color = "#f06e3c";
  all.style.color = "#f06e3c";

  for (let i = 0; i < images.length; i++) {
    if (images[i].dataset.gender == "men") {
      images[i].style.display = "flex";
    } else {
      images[i].style.display = "none";
    }
  }
});
