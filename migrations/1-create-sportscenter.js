'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sportscenters', {
      sportscenter_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      phone: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      province: {
        type: Sequelize.STRING
      },
      rings: {
        type: Sequelize.INTEGER
      },
      timetable: {
        type: Sequelize.STRING
      },
      dni: {
        type: Sequelize.STRING
      },
      // onDelete: 'cascade',
      // onUpdate: 'cascade'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sportscenters');
  }
};