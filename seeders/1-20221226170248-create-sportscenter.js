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
        dni: "",
      }, {
        name: "Tutempo K7",
        description: "TUTEMPO K7 Fitness Spa-Club está situado en Paterna, a escasos kilómetros de Valencia y con fácil acceso desde la A7.Alberga 9 pistas de pádel, y dispone de servicio de cafetería y restauración.",
        phone: "961387400",
        address: "Pista de Ademuz, Salida 7. 46980 Paterna(Valencia)",
        province: "Valencia",
        rings: "9",
        timetable: "Abierto de 8:00 a 22:00, ininterrumpidamente",
        dni: "",
      }, {
        name: "Polideportivo Juan Antonio Samaranch",
        description: "También conocido como enjoy! Samarach, se encuentra situado en Valencia. Las instalaciones del Polideportivo Juan Antonio Samaranch están equipadas con 11 pistas de pádel.",
        phone: "650047962",
        address: "Avenida de Francia,20. 46023, Valencia",
        province: "Valencia",
        rings: "11",
        timetable: "Abierto de 10:00 a 20:00, ininterrumpidamente",
        dni: "",
      }, {
        name: "Valencia Tennis Center",
        description: "Valencia Tennis Center es el complejo deportivo situado en las Escuelas Pías de la Malvarrosa, a escasos metros de la famosa playa valenciana de la Malvarrosa. El centro se encuentra equipado con 8 pistas de padel de césped artificial con iluminación.",
        phone: "650047962",
        address: "Calle Vicent La Roda, 24. 46011, Valencia",
        province: "Valencia",
        rings: "8",
        timetable: "Abierto de 9:00 a 21:00, ininterrumpidamente",
        dni: "",
      }, {
        name: "Valencia Tennis Center",
        description: "Valencia Tennis Center es el complejo deportivo situado en las Escuelas Pías de la Malvarrosa, a escasos metros de la famosa playa valenciana de la Malvarrosa. El centro se encuentra equipado con 8 pistas de padel de césped artificial con iluminación.",
        phone: "650047962",
        address: "Calle Vicent La Roda, 24. 46011, Valencia",
        province: "Valencia",
        rings: "8",
        timetable: "Abierto de 9:00 a 21:00, ininterrumpidamente",
        dni: "",
      }, {
        name: "Valencia Tennis Center",
        description: "Valencia Tennis Center es el complejo deportivo situado en las Escuelas Pías de la Malvarrosa, a escasos metros de la famosa playa valenciana de la Malvarrosa. El centro se encuentra equipado con 8 pistas de padel de césped artificial con iluminación.",
        phone: "650047962",
        address: "Calle Vicent La Roda, 24. 46011, Valencia",
        province: "Valencia",
        rings: "8",
        timetable: "Abierto de 9:00 a 21:00, ininterrumpidamente",
        dni: "",
      }, {
        name: "Valencia Tennis Center",
        description: "Valencia Tennis Center es el complejo deportivo situado en las Escuelas Pías de la Malvarrosa, a escasos metros de la famosa playa valenciana de la Malvarrosa. El centro se encuentra equipado con 8 pistas de padel de césped artificial con iluminación.",
        phone: "650047962",
        address: "Calle Vicent La Roda, 24. 46011, Valencia",
        province: "Valencia",
        rings: "8",
        timetable: "Abierto de 9:00 a 21:00, ininterrumpidamente",
        dni: "",
      }, {
        name: "Valencia Tennis Center",
        description: "Valencia Tennis Center es el complejo deportivo situado en las Escuelas Pías de la Malvarrosa, a escasos metros de la famosa playa valenciana de la Malvarrosa. El centro se encuentra equipado con 8 pistas de padel de césped artificial con iluminación.",
        phone: "650047962",
        address: "Calle Vicent La Roda, 24. 46011, Valencia",
        province: "Valencia",
        rings: "8",
        timetable: "Abierto de 9:00 a 21:00, ininterrumpidamente",
        dni: "",
      }, {
        name: "Valencia Tennis Center",
        description: "Valencia Tennis Center es el complejo deportivo situado en las Escuelas Pías de la Malvarrosa, a escasos metros de la famosa playa valenciana de la Malvarrosa. El centro se encuentra equipado con 8 pistas de padel de césped artificial con iluminación.",
        phone: "650047962",
        address: "Calle Vicent La Roda, 24. 46011, Valencia",
        province: "Valencia",
        rings: "8",
        timetable: "Abierto de 9:00 a 21:00, ininterrumpidamente",
        dni: "",
      }, {
        name: "Valencia Tennis Center",
        description: "Valencia Tennis Center es el complejo deportivo situado en las Escuelas Pías de la Malvarrosa, a escasos metros de la famosa playa valenciana de la Malvarrosa. El centro se encuentra equipado con 8 pistas de padel de césped artificial con iluminación.",
        phone: "650047962",
        address: "Calle Vicent La Roda, 24. 46011, Valencia",
        province: "Valencia",
        rings: "8",
        timetable: "Abierto de 9:00 a 21:00, ininterrumpidamente",
        dni: "",
      },

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('sportscenters', null, {});

  }
};
