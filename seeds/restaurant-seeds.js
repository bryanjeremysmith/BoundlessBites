const { Model } = require('sequelize');
const { Restaurant } = require('../models');

const restaurantData = [

    {
        restaurant_name: 'Bob\'s Red Mill',
        image_src: "/Images/BobsRedMill.jpg",
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
        image_src: "/Images/New-cascadia-traditional.webp",
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
        image_src: "/Images/Petunias.jpeg",
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
        image_src: "/Images/offthegriddle.jpg",
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
        image_src: "/Images/Dirty_Lettuce_logo.png",
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
        image_src: "/Images/Jam_on_Hawthorne_logo.png",
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
        image_src: "/Images/logo_harlow.png",
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
        image_src: "/Images/Screen-Door-Pearl-patio.jpg",
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
        image_src: "/Images/urdaneta.png",
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
        image_src: "/Images/christinasCartel.jpeg",
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
        image_src: "/Images/applebees.jpeg",
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
        image_src: "/Images/red-robin.jpg",
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
        image_src: "/Images/OliveGarden.webp",
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
        image_src: "/Images/Shari's.avif",
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