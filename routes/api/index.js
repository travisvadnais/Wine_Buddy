const router = require('express').Router();
const wineRoutes = require('./wines');

router.use('/wines', wineRoutes);

module.exports = router;