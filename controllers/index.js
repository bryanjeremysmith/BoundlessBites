const router = require('express').Router();

const homeRoutes = require('./htmlRoutes');
const restaurantRoutes = require('./restaurantRoutes');
const comment = require('./commentRoutes');

router.use('/', homeRoutes);
router.use('/restaurant', restaurantRoutes);
router.use('/api', comment);

module.exports = router;
