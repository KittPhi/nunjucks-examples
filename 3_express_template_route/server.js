const express = require("express");
const app = express();
const port = 3000;
const indexRoute = require("./routes/index");
const aboutRoute = require("./routes/about");
// const path = require('path')

app.use("/", indexRoute);
app.use("/about", aboutRoute);

app.use(express.static("public"));
// app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
