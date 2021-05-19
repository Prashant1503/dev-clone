'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class District extends Model {

    static associate(models) {

      District.belongsTo(models.State, { foreignKey: "id" });
    }
  };
  District.init({
    name: DataTypes.STRING,
    active: DataTypes.STRING,
    confirmed: DataTypes.STRING,
    deceased: DataTypes.STRING,
    recovered: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'District',
  });
  return District;
};