const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host :dbConfig.HOST,
    dialect : dbConfig.dialect,
    operatorsAliases: false,
    pool :{
        max : dbConfig.pool.max,
        min :dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle : dbConfig.pool.idle
    }
});
const db= {};
db.Sequelize =Sequelize;
db.sequelize = sequelize;
db.users = require("./users.js")(sequelize, Sequelize);
db.posts = require("./posts.js")(sequelize,Sequelize);
db.users.belongsToMany(db.posts,{
    through :"user_posts",
    foreignkey : "usersId",
    otherkey : "postsId"
});
module.exports =db;