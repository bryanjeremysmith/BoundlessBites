const express = require("express");
const Restaurant = require("../models/Restaurant");
const router = express.Router();


router.get("/", (req, res) => {

Restaurant.findAll().then(results => {
    //console.log(results);
    const restaurants = results.map(result => result.get({plain:true}))
    //console.log(restaurants);
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

router.post('/api/users'), async (req, res) => {
  console.log("here i am")
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

module.exports = router;