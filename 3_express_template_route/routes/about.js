var express = require("express");
var router = express.Router();

router.get("/about", function (req, res, next) {
  res.sendFile(__dirname + "/views/about.html");
});

module.exports = router;
