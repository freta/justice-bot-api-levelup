const db =require("../database/models");
const User = db.users;
const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = (req,res) =>{
    User.create({
        username:req.body.username,
        email :req.body.email,
        password: bcrypt.hashSync(req.body.password)
    }).catch (err => {
        res.status(500).send({message :err.message});
    });
}