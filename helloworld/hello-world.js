var nunjucks = require("nunjucks");

console.log(
  nunjucks.render("hello-world.njk", {
    message: "Hello World!",
  })
);
