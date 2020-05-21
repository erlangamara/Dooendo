'use strict';
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Username is empty'},
        notNull: {msg: 'Username is empty'}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Password is empty'},
        notNull: {msg: 'Password is empty'}
      }
    },
    name: DataTypes.STRING,
    bio: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate (instance, option) {
        return bcrypt.hash(instance.password, saltRounds)
          .then(function(hash){
            instance.password = hash;
          })
      }
    }
  });

  User.associate = function(models) {
    User.belongsToMany(models.Habit, {through: 'UserHabit'})
  };
  return User;
};