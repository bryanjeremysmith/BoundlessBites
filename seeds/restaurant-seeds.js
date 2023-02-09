const { Model } = require('sequelize');
const { Restaurant } = require('../models');

const restaurantData = [

    {
        restaurant_name: 'Bob\'s Red Mill',
        is_vegetarian: true,
        is_vegan: true,
        is_gluten_free: true,

    },

    {
        restaurant_name: 'New Cascadia Tradtitional',
        is_vegetarian: false,
        is_vegan: false,
        is_gluten_free: true,
    },

    {
        restaurant_name: 'Petunia\'s Bakery',
        is_vegetarian: false,
        is_vegan: false,
        is_gluten_free: true,
    },

    {
        restaurant_name: 'Off The Griddle',
        is_vegetarian: true,
        is_vegan: true,
        is_gluten_free: false,
    },

    {
        restaurant_name: 'Dirty Lettuce',
        is_vegetarian: true, 
        is_vegan: true,
        is_gluten_free: false,
    },

    {
        restaurant_name: 'Jam on Hawthorne',
        is_vegetarian: false,
        is_vegan: false,
        is_gluten_free: true,
    },

    {
        restaurant_name: 'Harlowe',
        is_vegetarian: true,
        is_vegan: true,
        is_gluten_free: true,
    },

    {
        restaurant_name: 'The Screen Door',
        is_vegetarian: false,
        is_vegan: false,
        is_gluten_free: true,
    },

    {
        restaurant_name: 'Urdeneta',
        is_vegetarian: true,
        is_vegan: true,
        is_gluten_free: true,
    },

    {
        restaurant_name: 'Christina\'s Cartel',
        is_vegetarian: false,
        is_vegan: false,
        is_gluten_free: true,
    },

    {
        restaurant_name: 'Applebee\'s',
        is_vegetarian: true,
        is_vegan: true,
        is_gluten_free: true,
    },

    {
        restaurant_name: 'Red Robin',
        is_vegetarian: true,
        is_vegan: true,
        is_gluten_free: true,
    },

    {
        restaurant_name: 'Olive Garden',
        is_vegetarian: true,
        is_vegan: true,
        is_gluten_free: false,
    },

    {
        restaurant_name: 'Shari\'s',
        is_vegetarian: true,
        is_vegan: false,
        is_gluten_free: false,
    },
];

const seedRestaurant = () => Restaurant.bulkCreate(restaurantData);

module.exports = seedRestaurant