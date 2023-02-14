const router = require('express').Router();

const homeRoutes = require('./htmlRoutes');
const restaurantRoutes = require('./restaurantRoutes');

router.use('/', homeRoutes);
router.use('/restaurant', restaurantRoutes);

module.exports = router;
