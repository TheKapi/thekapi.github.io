const user = JSON.parse(localStorage.getItem("user"));
loginDisplay.innerHTML = "logged as " + user.email;
