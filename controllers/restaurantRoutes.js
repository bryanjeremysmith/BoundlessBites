const express = require("express");
const router = express.Router();
const Restaurant = require('../models/Restaurant')

router.get('/:id', async (req, res) => {
try {
    const restaurantData = await Restaurant.findByPk(req.params.id);
    
    if (!restaurantData) {
        res.status(404).json({ message: 'No resturant with this id!' });
        return;
    }
    
    // Cant use {layout: 'main'} and pass in varaibles?
    res.render('restaurant', {
        //passing in variables
        name: restaurantData.restaurant_name,
        vegetarian: restaurantData.is_vegetarian,
        vegan: restaurantData.is_vegan,
        gf: restaurantData.is_gluten_free,
        image: restaurantData.image_src
    });

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

