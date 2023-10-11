const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./src/database/models");
require("./src/routes/users.route")(app);
require("./src/routes/authroutes")(app);
var corsOptions ={
    origin : "https://localhost:8081"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
db.sequelize.sync();
app.get("/",(req,res) =>{
    res.json({message :"welcome"});
});
//app.use('/auth',auth);

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=> {
    console.log('server is running');
});
