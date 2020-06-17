var express = require("express");
var db = require("./models");
var PORT = process.env.PORT || 8080;


var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());





const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize('mysql://root:null:3306/newSequelizeDB')

const User = sequelize.define("user", {
    name: DataTypes.TEXT,
    favoriteColor: {
        type: DataTypes.TEXT,
        defaultValue: 'green'
    },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER
});

// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }



User.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
});