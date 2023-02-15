
const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: info.message });
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.json({ message: 'Login successful.' });
    });
  })(req, res, next);
});

module.exports = router;