const {Habit} = require('../models');

async function authorization (req, res, next) {
  try {
    let result = await Habit.findOne({
      where: {
        id: req.params.id
      }
    })

    if (result && result.UserId === req.user.id) {
      next()
    } else {
      throw {
        status: 403,
        message: 'Not authorized'
      }
    }
  } catch (err) {
    next(err);
  }
}

module.exports = authorization