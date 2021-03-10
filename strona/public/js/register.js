const form = document.querySelector(".main__form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const loginDisplay = document.querySelector(".login__name");
const navLogin = document.querySelector(".login");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      loginDisplay.innerHTML = "logged as " + data.email;
      localStorage.setItem("user", JSON.stringify(data));
    })
    .catch((error) => console.log("Nie zalogowano", error));
});
