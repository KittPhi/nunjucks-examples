let async = require("async");
let axios = require("axios");

module.exports = function (req, res, next) {
  async.parallel(
    [
      function (callback) {
        axios({
          method: "get",
          url: "https://swapi.dev/api/people/1/",
          headers: { "Content-Type": "application/json" },
        })
          .then(function (data) {
            callback(null, data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      function (callback) {
        axios({
          method: "get",
          url: "https://swapi.dev/api/people/1/",
          headers: { "Content-Type": "application/json" },
        })
          .then(function (data) {
            callback(null, data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      },
    ],
    function (error, success) {
      if (error) return next(error);
      res.locals.hair_color = success[0];
      res.locals.skin_color = success[1];
    }
  );
};
