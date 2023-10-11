const db = require("../database/models");
const config = require("../database/config/auth.config");
const User = db.users;
const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
exports.signup =(req,res)=> {
    //save user to the database
    User.create({
        username :req.body.username,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password, 8)
    }).then(user=>{
        res.send({message: "User was registered successfully!"});
    }).catch(err=>{
        res.status(500).send({message : err.message});
    });
}

exports.signin = (req, res) => {
    console.log(req.body);
    User.findOne({
      where: {
        username: req.body.username
      }
    })
      .then(user => {
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }
  
        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          users.password
        );
  
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
          });
        }
  
        var token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: 86400 // 24 hours
        });
    
    });
}