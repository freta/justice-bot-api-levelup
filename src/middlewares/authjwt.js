/* eslint-disable linebreak-style */
const jwt = require('jsonwebtoken');
const config =require('../database/config/auth.config');
const db = require('../database/models');
const User = db.users;

verifyToken = (req, res) => {
  let token = req.headers['x-access-token'];
  if (!token) {
    return res.status(403).send({
       message: 'No token provided'
      });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
     return res.status(401).send({ 
       message: 'Unauthorized!' 
      });
    }
    req.userid = decoded.id;
  });
};
module.exports = verifyToken;
