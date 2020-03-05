'use strict';
module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    title: DataTypes.STRING,
    destination: DataTypes.STRING,
    departure_date: DataTypes.DATE,
    status: DataTypes.BOOLEAN
  }, {});
  Plan.associate = function(models) {
    // associations can be defined here
  };
  return Plan;
};