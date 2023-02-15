const express = require("express");
const Restaurant = require("../models/Restaurant");
const User = require("../models/User")
const router = express.Router();
const bcrypt = require('bcrypt')


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

router.get("/disclaimer", (req, res) => {
  res.render("disclaimer", { layout: "main" });
});

module.exports = router;

router.post('/api/users', async (req, res) => {
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
});

router.post('/api/users/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/api/users/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

