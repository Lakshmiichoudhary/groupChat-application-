const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const User = sequelize.define("user",{
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    email : {
        type : Sequelize.STRING,
        unique : true,
        allowNull : false
    },
    phoneNo : {
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false
    }
})

module.exports = User;