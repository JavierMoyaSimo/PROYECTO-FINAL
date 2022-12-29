'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [
      {
        name: "USERADMIN",
        email: "admin@gmail.com",
        password: "mTcCYB2HnDJc3eMPwKyxZecFFmIo9gtwjHuS7MqWoMsAlldWuDMIlpEKwTqEb4xQqw2DeqxLbRhvC6v/YKyIkg==",
        phone: "777222333",
        roleId: "admin",
        dni: "11122233A",
        level: "0",
      }, {
        name: "user1",
        email: "user1@gmail.com",
        password: "FGFtB7/d4nWUvZVznuX99t18pYNkAqOU+20VGcYACGv2o+jsijjFQZar9ApIjR7T6fvwIoq5chS5VW4hKbYKNQ==",
        phone: "667777666",
        roleId: "user",
        dni: "44527961X",
        level: "1",

      }, {
        name: "user2",
        email: "user2@gmail.com",
        password: "FGFtB7/d4nWUvZVznuX99t18pYNkAqOU+20VGcYACGv2o+jsijjFQZar9ApIjR7T6fvwIoq5chS5VW4hKbYKNQ==",
        phone: "777222333",
        roleId: "user",
        dni: "44527960K",
        level: "2",

      }, {
        name: "user3",
        email: "user3@gmail.com",
        password: "FGFtB7/d4nWUvZVznuX99t18pYNkAqOU+20VGcYACGv2o+jsijjFQZar9ApIjR7T6fvwIoq5chS5VW4hKbYKNQ==",
        phone: "777222333",
        roleId: "user",
        dni: "44527963L",
        level: "3",

      }, {
        name: "sportscenteruser4",
        email: "sportscenteruser4@gmail.com",
        password: "FGFtB7/d4nWUvZVznuX99t18pYNkAqOU+20VGcYACGv2o+jsijjFQZar9ApIjR7T6fvwIoq5chS5VW4hKbYKNQ==",
        phone: "777222333",
        roleId: "sportscenteradmin",
        dni: "12345678S",
        level: "0",

      },

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};
