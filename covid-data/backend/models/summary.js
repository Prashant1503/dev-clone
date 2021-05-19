'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Summary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Summary.init({
    total: {
      type: DataTypes.STRING,
      allowNull: false
    },
    confirmedCasesIndian: {
      type: DataTypes.STRING,
      allowNull: false
    },
    confirmedCaseForeigh: {
      type: DataTypes.STRING,
      allowNull: false
    },
    discharged: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deaths: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Summary',
  });
  return Summary;
};