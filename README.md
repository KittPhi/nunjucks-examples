# nunjucks-examples

`node helloworld.js`

`node pass-data.js`

[Tutorial](https://css-tricks.com/killer-features-of-nunjucks/)

## [nunjuck extension snippets](https://github.com/eseom/nunjucks-template)

| Trigger   | Snippet                             |
| --------- | ----------------------------------- |
| n-extends | {% extends '${name}' %}             |
| n-block   | {% block ${name} %}{% endblock %}   |
| n-if      | {% if condition %}{% endif %}       |
| n-for     | {% for ${condition} %}{% endfor %}  |
| n-macro   | {% macro ${name}() %}{% endmacro %} |

# 3_node_nunjucks_web_template

## Using [Express](http://expressjs.com/en/starter/installing.html#next-hello-world-)

[Express Examples](http://expressjs.com/en/starter/examples.html)

```js
npm install express --save
```

[Basic Routing](http://expressjs.com/en/starter/basic-routing.html)

```js
app.METHOD(PATH, HANDLER);
```

[Serving static files in Express](http://expressjs.com/en/starter/static-files.html)

```js
app.use(express.static("public"));
```

Code Snippet: [server.js](https://expressjs.com/en/starter/hello-world.html)

## Using Expess [Middleware](https://expressjs.com/en/guide/using-middleware.html)

## Why use Tempating Engine with Express?

> Say you want an API repsonse data to display at a tag <p>,
> Express listens to the endpoint, gets the API response, then uses the Template Engine to feed the Response back to the front-end.

> Template Engines E.g Jade (default for Express App Generator), Pug and EJS.

[reference tutorial](https://www.youtube.com/watch?v=Hkg93BUD_qw)
