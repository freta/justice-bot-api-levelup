/* eslint-disable linebreak-style */
// const { authJwt } = require('../middlewares');
// const controller = require('../controllers');


// const controller = require("../controllers");
module.exports = (app) => {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept');
    next();
  });
};
