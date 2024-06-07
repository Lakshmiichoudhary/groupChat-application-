const Sequelize = require("sequelize");
const sequelize = require("../utils/database")
const User = require("./user")

const Chat = sequelize.define("chat",{
    id : {
        type : Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull : false,
    },
    message : {
        type : Sequelize.STRING,
        allowNull : false
    }
})

User.hasMany(Chat);
Chat.belongsTo(User);

module.exports = Chat;
