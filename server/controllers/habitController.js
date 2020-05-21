const {Habit} = require('../models');

class Controller {
  static async getHabit (req, res, next) {
    try {
      let result = await Habit.findAll();
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async getHabitById (req, res, next) {
    try {
      let habitId = req.params.id;

      let result = await Habit.findOne({
        where: {
          id: habitId
        }
      });

      if (result) {
        let getOneHabitResult = {
          id: result.id,
          UserId: result.UserId,
          creator_username: result.creator_username,
          title: result.title,
          activity: JSON.parse(result.activity),
          description: result.description,
          createdAt: result.createdAt,
          updatedAt: result.updatedAt
        };
        res.status(200).json(getOneHabitResult);
      } else {
        throw {
          status: 404,
          message: 'Habit not found'
        };
      }
    } catch (err) {
      next(err);
    }
  }

  static async createHabit (req, res, next) {
    try {
      let dataCreateHabit = {
        UserId: req.user.id,
        creator_username: req.user.username,
        title: req.body.title,
        activity: JSON.stringify(req.body.activity),
        description: req.body.description
      };

      await Habit.create(dataCreateHabit);

      res.status(201).json({message: 'Habit created'});
    } catch (err) {
      next(err);
    }
  }

  static async updateHabit (req, res, next) {
    try {
      let dataUpdateHabit = {
        UserId: req.user.id,
        creator_username: req.user.username,
        title: req.body.title,
        activity: JSON.stringify(req.body.activity),
        description: req.body.description
      };

      await Habit.update(dataUpdateHabit, {
        where: {
          id: req.params.id
        }
      });

      res.status(200).json({message: 'Habit updated'})
    } catch (err) {
      next(err);
    }
  }

  static async deleteHabit (req, res, next) {
    try {
      await Habit.destroy({
        where: {
          id: req.params.id
        }
      });

      res.status(200).json({message: 'Habit deleted'});
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;