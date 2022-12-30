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
        allowNull: false,
        type: Sequelize.STRING
      },
      players: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      level: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      sportscenter_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "sportscenters",
          key: "sportscenter_id",
        },
      },
      // onDelete: 'cascade',
      // onUpdate: 'cascade'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('games');
  }
};