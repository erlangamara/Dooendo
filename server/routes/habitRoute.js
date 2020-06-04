const router = require('express').Router();
const Controller = require('../controllers/habitController');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

router.get('/', Controller.getHabit);
router.get('/userHabit', authentication, Controller.getHabitByUser);
router.get('/:id', Controller.getHabitById);

router.use(authentication);
router.post('/', Controller.createHabit);
router.put('/:id', authorization, Controller.updateHabit);
router.delete('/:id', authorization, Controller.deleteHabit);

module.exports = router