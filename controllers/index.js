const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

const homeRoutes = require('./htmlRoutes');
const restaurantRoutes = require('./restaurantRoutes');

router.use('/', homeRoutes);
//router.use('/api', apiRoutes);
router.use('/restaurant', restaurantRoutes);


module.exports = router;
