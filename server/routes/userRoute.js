const router = require('express').Router();
const Controller = require('../controllers/userController');
const authentication = require('../middlewares/authentication');

router.post('/login', Controller.login);
router.post('/register', Controller.register);

router.use(authentication);
router.get('/', Controller.getUser);

module.exports = router;