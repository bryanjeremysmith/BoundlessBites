const express = require("express");
const Restaurant = require("../models/Restaurant");
const router = express.Router();


router.get("/", (req, res) => {

Restaurant.findAll().then(results => {
    console.log(results);
    const restaurants = results.map(result => result.get({plain:true}))
    console.log(restaurants);
    res.render("homepage", {
        restaurants: restaurants
    });
})
  
});

router.get("/signup", (req, res) => {
  res.render("signup", { layout: "main" });
});

router.get("/login", (req, res) => {
  res.render("login", { layout: "main" });
});

module.exports = router;
