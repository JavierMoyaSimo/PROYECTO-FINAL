'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rings', {
      ring_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      timetable: {
        type: Sequelize.STRING
      },
      players: {
        type: Sequelize.INTEGER
      },
      sportscenter_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "sportscenter",
          key: "sportscenter_id",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rings');
  }
};