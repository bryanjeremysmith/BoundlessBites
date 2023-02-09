const { Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection.js');

class Restaurant extends Model {}

Restaurant.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    restaurant_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    is_vegetarian: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },

    is_vegan: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },

    is_gluten_free: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },

},

{
    sequelize,
    timestamps:false,
    freezeTableName: true,
    underscored: true,
    modelName: 'restaurant',
}
);

module.exports = Restaurant