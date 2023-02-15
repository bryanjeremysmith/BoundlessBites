const router = require('express').Router();

const homeRoutes = require('./htmlRoutes');
const apiRoutes = require('./apiRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
