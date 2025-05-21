const { DataTypes, Model } = require("sequelize");
const db = require("../dbConnect");

class Post extends Model {}
Post.init({
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  image: DataTypes.STRING
}, { sequelize: db.Sequelize, modelName: "post" });

module.exports = Post;
