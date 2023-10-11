
//const {verifySignup}  = require('../middlewares');
// console.log(verifySignup);
const controller = require('../controllers/authcontroller');
const User = require("../database/models/users");
const bcrypt = require('bcryptjs');


module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });
 app.post('/auth/signup',(req,res)=> {
    //save user to the database
    const user= new User({
        username :req.body.username,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password, 8)
    }).then(user=>{
        res.send({message: "User was registered successfully!"});
    }).catch(err=>{
        res.status(500).send({message : err.message});
    });
}, controller.signup);

  app.post('/auth/signin', controller.signin);
  
 };
