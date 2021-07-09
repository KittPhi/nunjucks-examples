var express = require("express");
var router = express.Router();
var axios = require("axios");

router.get("/about", function (req, res, next) {
  axios({
    method: "get",
    url: "https://swapi.dev/api/people/1/",
    headers: { "Content-Type": "application/json" },
  })
    .then(function (data) {
      res.render("pages/about.html", {
        about: data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
