var nunjucks = require("nunjucks");

console.log(
  nunjucks.render("index.njk", {
    message: "Hello World!",
  })
);
