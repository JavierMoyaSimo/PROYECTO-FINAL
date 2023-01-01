'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('bookings', [
      {
        gameGameId: "1",
        userUserId: "2",
      }, {
        gameGameId: "2",
        userUserId: "3",
      }, {
        gameGameId: "3",
        userUserId: "4",

      }

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('bookings', null, {});

  }
};
