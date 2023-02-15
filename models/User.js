const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class User extends Model {
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
  }

const bcrypt = require('bcrypt')


User.init({
    //columns
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true   
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6]
        }
    }
},

{
    hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        }
    },
    sequelize,
    timestamps:false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
}

);

module.exports = User