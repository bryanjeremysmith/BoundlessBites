const router = require('express').Router();

const homeRoutes = require('./htmlRoutes');

router.use('/', homeRoutes);

module.exports = router;
