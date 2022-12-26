'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('games', {
      game_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      teamOne: {
        type: Sequelize.STRING
      },
      teamTwo: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      timetable: {
        type: Sequelize.STRING
      },
      sportscenter_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "sportscenters",
          key: "sportscenter_id",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('games');
  }
};