'use strict';
module.exports = (sequelize, DataTypes) => {
  const Habit = sequelize.define('Habit', {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'UserId is empty'},
        notNull: {msg: 'UserId is empty'}
      }
    },
    creator_username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Username is empty'},
        notNull: {msg: 'Username is empty'}
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Title is empty'},
        notNull: {msg: 'Title is empty'}
      }
    },
    activity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Activity is empty'},
        notNull: {msg: 'Activity is empty'}
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Description is empty'},
        notNull: {msg: 'Description is empty'}
      }
    }
  }, {});
  Habit.associate = function(models) {
    Habit.belongsToMany(models.User, {through: 'UserHabit'})
  };
  return Habit;
};