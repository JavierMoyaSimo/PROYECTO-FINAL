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
        
      }, {
        name: "user1",
        email: "user1@gmail.com",
        password: "VrRopLekvEzv56DMSvCWyiwuNxlAxD2kfTmsr29YWIfHS2x17/RrJXx485IDzt8EJixPHFyS/S4hiMB/XK2EPA==",
        phone: "667777666",
        roleRoleId: "user",
        dni: "44527961X",
        

      }, {
        name: "user2",
        email: "user2@gmail.com",
        password: "VrRopLekvEzv56DMSvCWyiwuNxlAxD2kfTmsr29YWIfHS2x17/RrJXx485IDzt8EJixPHFyS/S4hiMB/XK2EPA==",
        phone: "777222333",
        roleRoleId: "user",
        dni: "44527960K",
        

      }, {
        name: "user3",
        email: "user3@gmail.com",
        password: "VrRopLekvEzv56DMSvCWyiwuNxlAxD2kfTmsr29YWIfHS2x17/RrJXx485IDzt8EJixPHFyS/S4hiMB/XK2EPA==",
        phone: "777222333",
        roleRoleId: "user",
        dni: "44527963L",
        

      }, {
        name: "sportscenteruser4",
        email: "sportscenteruser4@gmail.com",
        password: "VrRopLekvEzv56DMSvCWyiwuNxlAxD2kfTmsr29YWIfHS2x17/RrJXx485IDzt8EJixPHFyS/S4hiMB/XK2EPA==",
        phone: "777222333",
        roleRoleId: "sportscenteradmin",
        dni: "12345678S",
        

      },

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};
