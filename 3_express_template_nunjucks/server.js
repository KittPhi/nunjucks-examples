const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const nunjucks = require("nunjucks");

app.use(express.static("public"));
app.use("/images", express.static("images"));

app.set("view engine", "html");
nunjucks.configure(["views/"], {
  autoescape: false,
  express: app,
});

app.get("/", (req, res) => {
  res.render(__dirname + "/views/home.html", {
    home: {
      heading: "Home Page",
      img: "images/vonage_logo.png",
    },
  });
});

app.get("/about", (req, res) => {
  res.render(__dirname + "/views/about.html", {
    about: {
      heading: "About Page",
      img: "images/vonage_logo.png",
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
