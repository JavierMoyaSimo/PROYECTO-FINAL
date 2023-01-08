'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sportscenters', {
      sportscenter_id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      phone: {
        allowNull: false,
        isNumeric: true,
        validate: {
          len: [9, 9]
        },
        type: Sequelize.STRING
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      province: {
        allowNull: false,
        validate: {
          len: [2, 30]
        },
        type: Sequelize.STRING
      },
      rings: {
        allowNull: false,
        isNumeric: true,
        type: Sequelize.INTEGER
      },
      timetable: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cif: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // onDelete: 'cascade',
      // onUpdate: 'cascade'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sportscenters');
  }
};