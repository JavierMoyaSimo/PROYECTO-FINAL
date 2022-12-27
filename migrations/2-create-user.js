'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING,
        references: {
          model: 'roles',
          key: 'role_id'
        }
      },
      dni: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.INTEGER
      },
      // onDelete: 'cascade',
      // onUpdate: 'cascade'      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};