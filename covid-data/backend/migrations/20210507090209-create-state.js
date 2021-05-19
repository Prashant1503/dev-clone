'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('States', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      loc: {
        type: Sequelize.STRING
      },
      confirmedCases: {
        type: Sequelize.STRING
      },
      discharged: {
        type: Sequelize.STRING
      },
      deaths: {
        type: Sequelize.STRING
      },
      totalConfirmed: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('States');
  }
};