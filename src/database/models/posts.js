
module.exports = (sequelize,Sequelize)=>{
const Posts = sequelize.define("posts",{
  
    poster :{
        type: Sequelize.STRING,
        allowNull : false,

    },
    title:{
        type: Sequelize.STRING,
        allowNull : false
    },
    description:{
        type: Sequelize.STRING,
        allowNull:false
    }

});
return Posts;

};