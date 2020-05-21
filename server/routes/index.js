const router = require('express').Router();
const userRoute = require('./userRoute');
const habitRoute = require('./habitRoute');

router.use('/users', userRoute);
router.use('/habits', habitRoute);

module.exports = router;