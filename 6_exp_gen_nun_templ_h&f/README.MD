[Nunjucks and Express App](https://regbrain.com/article/nunjucks-express-app)

```js
npx express-generator myapp --no-view
// or
npx express-generator . --no-view
// then
npm i express dotenv nunjucks @vonage/server-sdk

// mkdir
mkdir views && touch views/layout.njk && touch views/index.njk

```

Go to /public directory and remove index.html file which is there as a placeholder since we haven't selected any view engine.

## Takeaway:

> We are feeding `layout.njk` template into `index.njk`

> Configured inside `routes/index.js` we are passing `data = {layout: "layout.njk"}` into `res.render("index.njk", data);`
