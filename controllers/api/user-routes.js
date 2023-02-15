const express = require('express');
const passport = require('passport');
const router = express.Router();
const auth = require('../auth')

// Set up passport authentication as in the auth.js file

router.post('/api/login', passport.authenticate('local'), function(req, res) {
  res.json({ user: req.user });
});

module.exports = router;

