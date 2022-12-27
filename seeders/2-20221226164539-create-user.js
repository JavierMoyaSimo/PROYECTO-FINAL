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
        role: "admin",
        dni: "",
        level: "",
      }, {
        name: "user1",
        email: "user1@gmail.com",
        password: "FGFtB7/d4nWUvZVznuX99t18pYNkAqOU+20VGcYACGv2o+jsijjFQZar9ApIjR7T6fvwIoq5chS5VW4hKbYKNQ==",
        phone: "667777666",
        role: "user",
        dni: "",
        level: "",

      }, {
        name: "user2",
        email: "user2@gmail.com",
        password: "FGFtB7/d4nWUvZVznuX99t18pYNkAqOU+20VGcYACGv2o+jsijjFQZar9ApIjR7T6fvwIoq5chS5VW4hKbYKNQ==",
        phone: "777222333",
        role: "user",
        dni: "",
        level: "",

      }, {
        name: "user3",
        email: "user3@gmail.com",
        password: "FGFtB7/d4nWUvZVznuX99t18pYNkAqOU+20VGcYACGv2o+jsijjFQZar9ApIjR7T6fvwIoq5chS5VW4hKbYKNQ==",
        phone: "777222333",
        role: "user",
        dni: "",
        level: "",

      }, {
        name: "sportscenteruser4",
        email: "sportscenteruser4@gmail.com",
        password: "FGFtB7/d4nWUvZVznuX99t18pYNkAqOU+20VGcYACGv2o+jsijjFQZar9ApIjR7T6fvwIoq5chS5VW4hKbYKNQ==",
        phone: "777222333",
        role: "sportscenteradmin",
        dni: "",
        level: "",

      },

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};
