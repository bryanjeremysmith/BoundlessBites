
// const express = require('express');
// const cookieParser = require('cookie-parser')

// const app = express();

// app.use(cookieParser());

// app.get('/setcookie', (req, res) => {
//     res.cookie(`Cookie token name`,`encrypted cookie string Value`,{
//         maxAge: 86400, //max age is in seconds it is currently set to 24 hours
//         secure: true,
//         httpOnly: true,
//         sameSite: 'strict'
//     });
//     res.send('Cookie have been saved successfully');
// });




// const router = express.Router();
// const passport = require('passport');

// router.post('/login', function(req, res, next) {
//   passport.authenticate('local', function(err, user, info) {
//     if (err) {
//       return next(err);
//     }
//     if (!user) {
//       return res.status(401).json({ message: info.message });
//     }
//     req.logIn(user, function(err) {
//       if (err) {
//         return next(err);
//       }
//       return res.json({ message: 'Login successful.' });
//     });
//   })(req, res, next);
// });

// module.exports = router;