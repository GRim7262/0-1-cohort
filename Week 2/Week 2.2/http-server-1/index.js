const express = require("express");
const port = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hi there</h1>");
});

app.get("/route-handler", (req, res) => {
  res.send({ name: "Vinal", age: "24" });
});

app.post("/conversations", (req, res) => {
  console.log(req.body);
  res.send({ msg: "2 + 2 = 4" });
});
app.listen(port);
