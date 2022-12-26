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
      players: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
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