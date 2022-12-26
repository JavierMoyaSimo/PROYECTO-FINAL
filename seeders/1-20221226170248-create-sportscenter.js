'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('sportscenters', [
      {
        name: "Valencia Tennis Center",
        description: "Valencia Tennis Center es el complejo deportivo situado en las Escuelas Pías de la Malvarrosa, a escasos metros de la famosa playa valenciana de la Malvarrosa. El centro se encuentra equipado con 8 pistas de padel de césped artificial con iluminación.",
        phone: "650047962",
        address: "Calle Vicent La Roda, 24. 46011, Valencia",
        province: "Valencia",
        rings: "8",
        timetable: "Abierto de 9:00 a 21:00, ininterrumpidamente",
      }, {
        name: "Valencia Tennis Center",
        description: "Valencia Tennis Center es el complejo deportivo situado en las Escuelas Pías de la Malvarrosa, a escasos metros de la famosa playa valenciana de la Malvarrosa. El centro se encuentra equipado con 8 pistas de padel de césped artificial con iluminación.",
        phone: "650047962",
        address: "Calle Vicent La Roda, 24. 46011, Valencia",
        province: "Valencia",
        rings: "8",
        timetable: "Abierto de 9:00 a 21:00, ininterrumpidamente",
      }, {
        name: "Valencia Tennis Center",
        description: "Valencia Tennis Center es el complejo deportivo situado en las Escuelas Pías de la Malvarrosa, a escasos metros de la famosa playa valenciana de la Malvarrosa. El centro se encuentra equipado con 8 pistas de padel de césped artificial con iluminación.",
        phone: "650047962",
        address: "Calle Vicent La Roda, 24. 46011, Valencia",
        province: "Valencia",
        rings: "8",
        timetable: "Abierto de 9:00 a 21:00, ininterrumpidamente",
      },{
        name: "Valencia Tennis Center",
        description: "Valencia Tennis Center es el complejo deportivo situado en las Escuelas Pías de la Malvarrosa, a escasos metros de la famosa playa valenciana de la Malvarrosa. El centro se encuentra equipado con 8 pistas de padel de césped artificial con iluminación.",
        phone: "650047962",
        address: "Calle Vicent La Roda, 24. 46011, Valencia",
        province: "Valencia",
        rings: "8",
        timetable: "Abierto de 9:00 a 21:00, ininterrumpidamente",
      },{
        name: "Valencia Tennis Center",
        description: "Valencia Tennis Center es el complejo deportivo situado en las Escuelas Pías de la Malvarrosa, a escasos metros de la famosa playa valenciana de la Malvarrosa. El centro se encuentra equipado con 8 pistas de padel de césped artificial con iluminación.",
        phone: "650047962",
        address: "Calle Vicent La Roda, 24. 46011, Valencia",
        province: "Valencia",
        rings: "8",
        timetable: "Abierto de 9:00 a 21:00, ininterrumpidamente",
      },{
        name: "Valencia Tennis Center",
        description: "Valencia Tennis Center es el complejo deportivo situado en las Escuelas Pías de la Malvarrosa, a escasos metros de la famosa playa valenciana de la Malvarrosa. El centro se encuentra equipado con 8 pistas de padel de césped artificial con iluminación.",
        phone: "650047962",
        address: "Calle Vicent La Roda, 24. 46011, Valencia",
        province: "Valencia",
        rings: "8",
        timetable: "Abierto de 9:00 a 21:00, ininterrumpidamente",
      },{
        name: "Valencia Tennis Center",
        description: "Valencia Tennis Center es el complejo deportivo situado en las Escuelas Pías de la Malvarrosa, a escasos metros de la famosa playa valenciana de la Malvarrosa. El centro se encuentra equipado con 8 pistas de padel de césped artificial con iluminación.",
        phone: "650047962",
        address: "Calle Vicent La Roda, 24. 46011, Valencia",
        province: "Valencia",
        rings: "8",
        timetable: "Abierto de 9:00 a 21:00, ininterrumpidamente",
      },{
        name: "Valencia Tennis Center",
        description: "Valencia Tennis Center es el complejo deportivo situado en las Escuelas Pías de la Malvarrosa, a escasos metros de la famosa playa valenciana de la Malvarrosa. El centro se encuentra equipado con 8 pistas de padel de césped artificial con iluminación.",
        phone: "650047962",
        address: "Calle Vicent La Roda, 24. 46011, Valencia",
        province: "Valencia",
        rings: "8",
        timetable: "Abierto de 9:00 a 21:00, ininterrumpidamente",
      },{
        name: "Valencia Tennis Center",
        description: "Valencia Tennis Center es el complejo deportivo situado en las Escuelas Pías de la Malvarrosa, a escasos metros de la famosa playa valenciana de la Malvarrosa. El centro se encuentra equipado con 8 pistas de padel de césped artificial con iluminación.",
        phone: "650047962",
        address: "Calle Vicent La Roda, 24. 46011, Valencia",
        province: "Valencia",
        rings: "8",
        timetable: "Abierto de 9:00 a 21:00, ininterrumpidamente",
      },{
        name: "Valencia Tennis Center",
        description: "Valencia Tennis Center es el complejo deportivo situado en las Escuelas Pías de la Malvarrosa, a escasos metros de la famosa playa valenciana de la Malvarrosa. El centro se encuentra equipado con 8 pistas de padel de césped artificial con iluminación.",
        phone: "650047962",
        address: "Calle Vicent La Roda, 24. 46011, Valencia",
        province: "Valencia",
        rings: "8",
        timetable: "Abierto de 9:00 a 21:00, ininterrumpidamente",
      },

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('sportscenters', null, {});

  }
};
