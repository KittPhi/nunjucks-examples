var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("pages/home.html", {
    home: {
      heading: "Home Page",
      img: "images/vonage_logo.png",
    },
  });
});

module.exports = router;
