const { Model } = require('sequelize');
const { Restaurant } = require('../models');

const restaurantData = [

    {
        restaurant_name: 'Bob\'s Red Mill',
        is_vegetarian: true,
        is_vegan: true,
        is_gluten_free: true,
        is_kosher: true,
        is_halal: false,
        is_lowsodium: true,
        is_pescatarian: false,
    },

    {
        restaurant_name: 'New Cascadia Traditional',
        is_vegetarian: false,
        is_vegan: false,
        is_gluten_free: true,
        is_kosher: false,
        is_halal: false,
        is_lowsodium: true,
        is_pescatarian: false,
    },

    {
        restaurant_name: 'Petunia\'s Bakery',
        is_vegetarian: false,
        is_vegan: false,
        is_gluten_free: true,
        is_kosher: true,
        is_halal: false,
        is_lowsodium: true,
        is_pescatarian: false,
    },

    {
        restaurant_name: 'Off The Griddle',
        is_vegetarian: true,
        is_vegan: true,
        is_gluten_free: false,
        is_kosher: true,
        is_halal: true,
        is_lowsodium: true,
        is_pescatarian: false,
    },

    {
        restaurant_name: 'Dirty Lettuce',
        is_vegetarian: true, 
        is_vegan: true,
        is_gluten_free: false,
        is_kosher: false,
        is_halal: false,
        is_lowsodium: true,
        is_pescatarian: false,
    },

    {
        restaurant_name: 'Jam on Hawthorne',
        is_vegetarian: false,
        is_vegan: false,
        is_gluten_free: true,
        is_kosher: false,
        is_halal: false,
        is_lowsodium: true,
        is_pescatarian: false,
    },

    {
        restaurant_name: 'Harlow',
        is_vegetarian: true,
        is_vegan: true,
        is_gluten_free: true,
        is_kosher: false,
        is_halal: false,
        is_lowsodium: true,
        is_pescatarian: true,
    },

    {
        restaurant_name: 'The Screen Door',
        is_vegetarian: false,
        is_vegan: false,
        is_gluten_free: true,
        is_kosher: true,
        is_halal: false,
        is_lowsodium: true,
        is_pescatarian: true,
    },

    {
        restaurant_name: 'Urdaneta',
        is_vegetarian: true,
        is_vegan: true,
        is_gluten_free: true,
        is_kosher: true,
        is_halal: true,
        is_lowsodium: true,
        is_pescatarian: true,
    },

    {
        restaurant_name: 'Christina\'s Cartel',
        is_vegetarian: false,
        is_vegan: false,
        is_gluten_free: true,
        is_kosher: true,
        is_halal: false,
        is_lowsodium: true,
        is_pescatarian: false,
    },

    {
        restaurant_name: 'Applebee\'s',
        is_vegetarian: true,
        is_vegan: true,
        is_gluten_free: true,
        is_kosher: false,
        is_halal: false,
        is_lowsodium: true,
        is_pescatarian: true,
    },

    {
        restaurant_name: 'Red Robin',
        is_vegetarian: true,
        is_vegan: true,
        is_gluten_free: true,
        is_kosher: false,
        is_halal: false,
        is_lowsodium: true,
        is_pescatarian: true,
    },

    {
        restaurant_name: 'Olive Garden',
        is_vegetarian: true,
        is_vegan: true,
        is_gluten_free: false,
        is_kosher: false,
        is_halal: false,
        is_lowsodium: true,
        is_pescatarian: false,
    },

    {
        restaurant_name: 'Shari\'s',
        is_vegetarian: true,
        is_vegan: false,
        is_gluten_free: false,
        is_kosher: false,
        is_halal: false,
        is_lowsodium: true,
        is_pescatarian: false,
    },
];

const seedRestaurant = () => Restaurant.bulkCreate(restaurantData);

module.exports = seedRestaurant