const { Model } = require('sequelize');
const { User } = require('../models');

const userData = [
    {
        username: 'user1',
        email: 'user1@email.com',
        password: '123456'
    },

    {
        username: 'user2',
        email: 'user2@email.com',
        password: '123456'
    },

    {
        username: 'user3',
        email: 'user3@email.com',
        password: '123456'
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser