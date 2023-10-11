const db = require('../database/models');
const User = db.users;

const checkDuplicates = (req, res, next) => {
    // email
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then((user) => {
    if (user) {
      res.status(400).send(
        {
          message: "The email already in use!"
        });
      return;
    }

    // username
    User.findOne({
        where : {
             username : req.body.username
        }
    }).then (user =>{
        if(user){
            res.status(400).send({message : "Failed User is already in Use!"
        });
        return;
        }
  
    next();
  });
});
};

// console.log(checkDuplicates);
module.exports = checkDuplicates;