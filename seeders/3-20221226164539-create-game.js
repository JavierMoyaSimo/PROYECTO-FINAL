'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('games', [
      {
        type: "individual",
        players: "2",
        date: "2023-01-10 20:00:00",        
        sportscenterSportscenterId: "Valencia Tennis Center",
      }, {
        type: "teams",
        players: "4",
        date: "2023-02-10 21:00:00",
        sportscenterSportscenterId: "Valencia Tennis Center",
      }, {
        type: "teams",
        players: "4",
        date: "2023-03-10 10:15:00",
        sportscenterSportscenterId: "Tutempo K7",

      }, {
        type: "teams",
        players: "4",
        date: "2023-01-10 20:00:00",
        sportscenterSportscenterId: "Polideportivo Juan Antonio Samaranch",

      }, {
        type: "teams",
        players: "4",
        date: "2023-01-10 20:00:00",
        sportscenterSportscenterId: "Polideportivo Juan Antonio Samaranch",

      },{
        type: "teams",
        players: "4",
        date: "2023-01-20 20:00:00",
        sportscenterSportscenterId: "PadelMoon",

      },

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('games', null, {});

  }
};
