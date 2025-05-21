const { DataTypes, Model } = require("sequelize");
const db = require("../dbConnect");

class Comment extends Model {}
Comment.init({
  content: DataTypes.STRING
}, { sequelize: db.Sequelize, modelName: "comment" });

module.exports = Comment;
