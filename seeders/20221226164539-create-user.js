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
        role: "admin"
      }, {
        name: "user1",
        email: "user1@gmail.com",
        password: "FGFtB7/d4nWUvZVznuX99t18pYNkAqOU+20VGcYACGv2o+jsijjFQZar9ApIjR7T6fvwIoq5chS5VW4hKbYKNQ==",
        phone: "667777666",
        role: "user"

      }, {
        name: "user2",
        email: "user2@gmail.com",
        password: "FGFtB7/d4nWUvZVznuX99t18pYNkAqOU+20VGcYACGv2o+jsijjFQZar9ApIjR7T6fvwIoq5chS5VW4hKbYKNQ==",
        phone: "777222333",
        role: "user"

      }, {
        name: "user3",
        email: "user3@gmail.com",
        password: "FGFtB7/d4nWUvZVznuX99t18pYNkAqOU+20VGcYACGv2o+jsijjFQZar9ApIjR7T6fvwIoq5chS5VW4hKbYKNQ==",
        phone: "777222333",
        role: "user"

      }, {
        name: "user4",
        email: "user4@gmail.com",
        password: "FGFtB7/d4nWUvZVznuX99t18pYNkAqOU+20VGcYACGv2o+jsijjFQZar9ApIjR7T6fvwIoq5chS5VW4hKbYKNQ==",
        phone: "777222333",
        role: "user"

      },

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};
