'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      State.hasMany(models.District, { foreignKey: "state_id" });
    }
  };
  State.init({
    loc: DataTypes.STRING,
    confirmedCases: DataTypes.STRING,
    discharged: DataTypes.STRING,
    deaths: DataTypes.STRING,
    totalConfirmed: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'State',
  });
  return State;
};