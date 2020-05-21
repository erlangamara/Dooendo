const {User} = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class Controller {
  static async getUser (req, res, next) {
    try {
      let result = await User.findOne({
        where: {
          id: req.user.id
        }
      })

      res.status(200).json({
        username: result.username,
        name: result.name,
        bio: result.bio
      })
    } catch (err) {
      next(err);
    }
  }

  static async login (req, res, next) {
    try {
      let findUser = await User.findOne({
        where: {
          username: req.body.username
        }
      })

      if (findUser) {
        let compareResult = await bcrypt.compare(req.body.password, findUser.password);
        
        if (compareResult) {
          let token = jwt.sign({ 
            id: findUser.id,
            username: findUser.username
            }, process.env.SECRET);
          res.status(200).json({access_token: token});
        } else {
          throw {
            status: 400,
            message: 'Wrong username / password'
          }
        }

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

  static async register (req, res, next) {
    try {
      let dataRegister = {
        username: req.body.username,
        password: req.body.password
      }

      let result = await User.create(dataRegister);
      let token = jwt.sign({ 
        id: result.id,
        username: result.username
        }, process.env.SECRET);
      res.status(201).json({access_token: token})
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller