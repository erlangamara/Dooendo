'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserHabit = sequelize.define('UserHabit', {
    UserId: DataTypes.INTEGER,
    HabitId: DataTypes.INTEGER
  }, {});
  UserHabit.associate = function(models) {
    // associations can be defined here
  };
  return UserHabit;
};