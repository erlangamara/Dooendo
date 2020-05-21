const {User} = require('../models');
const jwt = require('jsonwebtoken');

 async function authentication (req, res, next) {
  let token = req.headers.token;

  try {
    let decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    let result = await User.findOne({
      where: {
        id: req.user.id
      }
    })

    if (result) {
      next()
    } else {
      throw {
        status: 404,
        message: 'User not found'
      }
    }
    
  } catch (err) {
    next(err);
  }
}

module.exports = authentication;