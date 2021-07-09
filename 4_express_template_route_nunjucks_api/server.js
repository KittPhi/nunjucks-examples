const express = require("express");
const app = express();
const port = 3000;
const homeRoute = require("./routes/home");
const aboutRoute = require("./routes/about");
const path = require("path");
const nunjucks = require("nunjucks");

app.use(express.static("public"));
app.use("/images", express.static("images"));
// app.use("/static", express.static(path.join(__dirname, "public")));

app.set("view engine", "html");
nunjucks.configure(["routes/views/"], {
  autoescape: false,
  express: app,
});

app.use("/", require("./middleware"));
app.use("/", homeRoute);
app.use("/", aboutRoute);

app.listen(port, () => {
  console.log(`🌏 Server at http://localhost:${port}`);
});
