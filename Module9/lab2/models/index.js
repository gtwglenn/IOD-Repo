const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

// Associations
User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

// Sync
async function init() {
  await User.sync();
  await Post.sync();
  await Comment.sync();
}
init();

module.exports = { User, Post, Comment };
