const User = require('./User');
const post = require('./post');
const comment = require('./comment');

post.belongsTo(User, {
    foreignKey: 'userId',
});

post.hasMany(comment, {
    foreignKey: 'postId',
});

comment.belongsTo(User, {
    foreignKey: 'userId',
});

module.exports = { User, comment, post };
