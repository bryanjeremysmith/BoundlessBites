const User = require('./User');
const Restaurant = require('./Restaurant');
const Comment = require('./Comment')

Restaurant.hasMany(Comment, {
    foreignKey: 'restaurantId',
    onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });

module.exports = {
    User,
    Comment,
    Restaurant
}