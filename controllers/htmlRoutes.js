const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('homepage', {layout: 'main'});
});

router.get('/signup', (req, res) => {
    res.render('signup', {layout: 'main'});
});

router.get('/login', (req, res) => {
    res.render('login', {layout: 'main'});
});

module.exports = router;