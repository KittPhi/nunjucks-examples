const express = require("express");
const nunjucks = require("nunjucks");
var app = express();

app.set("view engine", "html");

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

const PORT = 3000;

app.get("/", (req, res) => {
  res.render("home.html", {
    data: "server (server.js) >> child (home.html) >> parent (base.html)",
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
