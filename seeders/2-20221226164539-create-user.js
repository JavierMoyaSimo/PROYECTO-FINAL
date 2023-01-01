'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [
      {
        name: "Piwi",
        email: "piwimoya@gmail.com",
        password: "VrRopLekvEzv56DMSvCWyiwuNxlAxD2kfTmsr29YWIfHS2x17/RrJXx485IDzt8EJixPHFyS/S4hiMB/XK2EPA==",
        phone: "652835196",
        roleRoleId: "admin",
        dni: "44527964X",
        level: "0",
      }, {
        name: "user1",
        email: "user1@gmail.com",
        password: "FGFtB7/d4nWUvZVznuX99t18pYNkAqOU+20VGcYACGv2o+jsijjFQZar9ApIjR7T6fvwIoq5chS5VW4hKbYKNQ==",
        phone: "667777666",
        roleRoleId: "user",
        dni: "44527961X",
        level: "1",

      }, {
        name: "user2",
        email: "user2@gmail.com",
        password: "VrRopLekvEzv56DMSvCWyiwuNxlAxD2kfTmsr29YWIfHS2x17/RrJXx485IDzt8EJixPHFyS/S4hiMB/XK2EPA==",
        phone: "777222333",
        roleRoleId: "user",
        dni: "44527960K",
        level: "2",

      }, {
        name: "user3",
        email: "user3@gmail.com",
        password: "FGFtB7/d4nWUvZVznuX99t18pYNkAqOU+20VGcYACGv2o+jsijjFQZar9ApIjR7T6fvwIoq5chS5VW4hKbYKNQ==",
        phone: "777222333",
        roleRoleId: "user",
        dni: "44527963L",
        level: "3",

      }, {
        name: "sportscenteruser4",
        email: "sportscenteruser4@gmail.com",
        password: "FGFtB7/d4nWUvZVznuX99t18pYNkAqOU+20VGcYACGv2o+jsijjFQZar9ApIjR7T6fvwIoq5chS5VW4hKbYKNQ==",
        phone: "777222333",
        roleRoleId: "sportscenteradmin",
        dni: "12345678S",
        level: "0",

      },

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};
