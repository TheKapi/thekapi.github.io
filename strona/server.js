const express = require("express");
const app = express();
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const users = [];

app.use("/", express.static("public"));

app.use(express.json());

app.post("/register", (req, res) => {
  if (!emailRegex.test(req.body.email)) {
    console.log("Nie poprawny zapis");
    return res.sendStatus(400);
  }
  const user = users.find((user) => user.email === req.body.email && user.password === req.body.password);
  if (!user) {
    users.push(req.body);
    console.log(users);
    return res.status(200).json({ email: req.body.email });
  }
  return res.sendStatus(400);
});

app.post("/login", (req, res) => {
  const user = users.find((user) => user.email === req.body.email && user.password === req.body.password);
  if (!user) {
    return res.sendStatus(401);
  }
  return res.status(200).json({ email: req.body.email });
});

app.listen(3000, () => {
  console.log("working");
});
