const bcrypt = require("bcryptjs");
module.exports =(sequelize,Sequelize) => {
    const Users = sequelize.define("users",{
    
        email : {
            type: Sequelize.STRING,
            unique : true,
            allowNull : false
           
        },
        username :{
            type: Sequelize.STRING,
            unique : true,
            allowNull: false
            
        },
        password : {
            type: Sequelize.STRING,
            allowNull:false
           
        }
    },{
            hooks:{
                beforeCreate : (users)=>{
                    const salt = bcrypt.genSaltSync();
                    users.password = bcrypt.hashSync(users.password,salt);
                }
            },
            instanceMethods: {
                validPassword : (password)=>{
                    return bcrypt.compareSync(password,this.password);
                }
            }
        }
    );
    return Users;
}