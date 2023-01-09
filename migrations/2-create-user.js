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
        allowNull: false,
        isAlpha: true,
        validate: {
          len: [1, 20]
        },
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        unique: true,
        isEmail: true,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phone: {
        allowNull: false,
        isNumeric: true,
        validate: {
          len: [9, 9]
        },
        type: Sequelize.STRING
      },
      roleRoleId: {
        type: Sequelize.STRING,
        references: {
          model: 'roles',
          key: 'role_id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      dni: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },



    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};