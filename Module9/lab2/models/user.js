const { DataTypes, Model } = require("sequelize");
const db = require("../dbConnect");

class User extends Model {}
User.init({
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  emailId: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING
}, { sequelize: db.Sequelize, modelName: "user" });

module.exports = User;
