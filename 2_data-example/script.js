var nunjucks = require("nunjucks");
console.log(
  nunjucks.render("index.njk", {
    page_title: "The Simpsons",
    data: [
      {
        name: "Homer Simpson",
        description: "Father",
      },
      {
        name: "Marge Simpson",
        description: "Mother",
      },
      {
        name: "Bart",
        description: "Son",
      },
    ],
  })
);
