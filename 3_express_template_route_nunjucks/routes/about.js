var express = require("express");
var router = express.Router();

router.get("/about", function (req, res, next) {
  res.render("pages/about.html", {
    about: {
      heading: "About Page",
      img: "https://dog.ceo/api/breeds/image/random",
    },
  });
});

module.exports = router;
