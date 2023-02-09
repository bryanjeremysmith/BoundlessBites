const seedRestaurant = require('./restaurant-seeds');

const sequelize = require('../config/connection.js');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedRestaurant();
    console.log('\n----- RESTAURANT SEEDS -----\n');

    process.exit(0);
};

seedAll();