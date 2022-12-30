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
        timetable: "Abierto de 9:00 a 21:00, todos los días del año.",
        dni: "11111111A",
      }, {
        name: "Tutempo K7",
        description: "TUTEMPO K7 Fitness Spa-Club está situado en Paterna, a escasos kilómetros de Valencia y con fácil acceso desde la A7.Alberga 9 pistas de pádel, y dispone de servicio de cafetería y restauración.",
        phone: "961387400",
        address: "Pista de Ademuz, Salida 7. 46980 Paterna(Valencia)",
        province: "Valencia",
        rings: "9",
        timetable: "Abierto de 8:00 a 22:00,todos los días, ininterrumpidamente",
        dni: "22222222B",
      }, {
        name: "Polideportivo Juan Antonio Samaranch",
        description: "También conocido como enjoy! Samarach, se encuentra situado en Valencia. Las instalaciones del Polideportivo Juan Antonio Samaranch están equipadas con 11 pistas de pádel.",
        phone: "650047962",
        address: "Avenida de Francia,20. 46023, Valencia",
        province: "Valencia",
        rings: "11",
        timetable: "Abierto de 10:00 a 20:00, todos los días, ininterrumpidamente",
        dni: "33333333C",
      }, {
        name: "Club tenis Andrés Gimeno",
        description: "Fundado en el año 1974, el Club de Tennis Andrés Gimeno dispone de un complejo deportivo de 22.000 metros cuadrados con todo tipo de instalaciones deportivas con un especial énfasis en el pádel (11 pistas).",
        phone: "936652300",
        address: "Autovía de Castelldefels , km 17 - 5, 8860 Castelldefels (Barcelona)",
        province: "Barcelona",
        rings: "11",
        timetable: "Abierto de lunes a domingo de 8 a 22.30 horas.",
        dni: "44444444D",
      }, {
        name: "Padel indoor Hospitalet",
        description: "Juega al pádel en Pádel Indoor Hospitalet, situado en la población de Hospitalet de Llobregat. El centro deportivo cuenta con 6 pistas de pádel donde podrás practicar el deporte que más te engancha.",
        phone: " 656356766",
        address: "Calle Cobalt , 85, Av. Fabregada 32. 08007 Hospitalet de Llobregat (Barcelona)",
        province: "Barcelona",
        rings: "6",
        timetable: "Abierto de 9:00 a 22:00, todos los días del año, ininterrumpidamente",
        dni: "555555555E",
      }, {
        name: "Club deportivo republic space",
        description: "Centro con gran variedad en deportes; cuenta con 28 pistas de pádel, entre pistas de cristal, muro cubiertas e individuales. Además de pistas de tenis, zona de cafetería/vending y tienda deportiva.",
        phone: "911299062",
        address: "Avenida Condesa de Chinchón , 107. 28660 Boadilla del Monte (Madrid)",
        province: "Madrid",
        rings: "28",
        timetable: "Abierto de 7:00 a 22:00, ininterrumpidamente",
        dni: "66666666F",
      }, {
        name: "Complejo deportivo Somontes",
        description: "El complejo deportivo Somontes se encuentra en un entorno natural privilegiado: El Monte del Pardo en Madrid. Sus cuidados jardines y zonas verdes, junto a encinas, fresnos y olmos centenarios, constituyen un ambiente ideal para la práctica deportiva, el ocio y el entretenimiento familiar, sin olvidar sus prestigiosos restaurantes, marco ideal para todo tipo de celebraciones.",
        phone: "913163235",
        address: "Ctra. Madrid - El pardo , Km 3400. 28035 Madrid (Madrid)",
        province: "Madrid",
        rings: "21",
        timetable: "Abierto de 8:00 a 21:00, todos los días.",
        dni: "77777777B",
      }, {
        name: "La red 21 Padel Center",
        description: "La Red 21 Pádel Center se encuentra en Alcalá de Guadaira, Sevilla. Entre sus instalaciones cuenta con un total de 17 pistal de padel, (1 individual) gimnasio, sala de fisioterapia, sala de belleza, zona de descanso y escuela.",
        phone: "666698099",
        address: "Calle La Red uno , 19. 41500 Alcalá de Guadaíra (Sevilla)",
        province: "Sevilla",
        rings: "21",
        timetable: "Abierto de 10:00 a 21:00, de lunes a domingo",
        dni: "88888888J",
      }, {
        name: "Club de padel Casablanca",
        description: "El club de pádel Casablanca se encuentra en la entrada de Utrera, en la urbanización Casablanca. El club cuenta con 8 pistas de pádel en el Camino 3 y 7 pistas en la calle Aerodinámica del Polígono Carretera Amarilla.",
        phone: "687412234",
        address: "Polígono industrial El Torno. 41710 Utrera (Sevilla)",
        province: "Sevilla",
        rings: "15",
        timetable: "Abierto de 9:00 a 21:00, ininterrumpidamente",
        dni: "99999999K",
      }, {
        name: "Club padel Murcia",
        description: "El club Pádel Murcia nace en un marco incomparable, perfectamente ubicado en Guadalupe. Cuenta con 12 pistas de pádel, zona de infantil y una sala de musculación, cardiovascular y Cycle Indoor.",
        phone: "665835658",
        address: "Carrill de los muchachos ,30107 Murcia (Murcia)",
        province: "Murcia",
        rings: "12",
        timetable: "Abierto de 10:00 a 22:00,  365 días del año.",
        dni: "11111113L",
      },{
        name: "Soccer World Asturias",
        description: "Disfruta jugando al pádel en las 10 pistas de pádel que Soccer World Asturias pone a tu alcance. Las instalaciones se encuentran situadas en la localidad de Gijón.",
        phone: " 984190123",
        address: "Autopista de entrada a Gijón , Asturias",
        province: "Asturias",
        rings: "10",
        timetable: "Abierto de 9:00 a 21:00, todos los días del año.",
        dni: "23454565H",
      },{
        name: "Padel Oviedo",
        description: "El centro deportivo cuenta con 7 pistas de pádel donde podrás practicar el deporte que más te engancha.",
        phone: "985283687",
        address: "Calle de Pérez Galdós , 5. 33012 Oviedo (Asturias)",
        province: "Asturias",
        rings: "10",
        timetable: "Abierto de 8:00 a 20:00, ininterrumpidamente.",
        dni: "555677888K",
      },{
        name: "Más que padel Lugo",
        description: "Disfruta jugando al pádel en las 6 pistas de pádel que Más Que Pádel Lugo pone a tu disposición. Las instalaciones se encuentran ubicadas en la localidad de Lugo.",
        phone: "982209996",
        address: "Rúa das Cesteiras , 7 - Polígono Industrial do Ceao. 27003 , Lugo.",
        province: "Lugo",
        rings: "6",
        timetable: "Abierto de 9:00 a 21:00, ininterrumpidamente.",
        dni: "34343434O",
      },{
        name: "Padel nuestro Lugo",
        description: "Practica al pádel en Pádel Nuestro Lugo, situado en la población de Lugo. El club deportivo cuenta con 4 pistas de pádel donde podrás jugar a tu deporte favorito.",
        phone: "687917609",
        address: "Ruá do Vidrio , 8 - Polígono del Ceao. 27003, Lugo",
        province: "Lugo",
        rings: "4",
        timetable: "Abierto de 8:00 a 20:00, todos los días del año.",
        dni: "233566889O",
      },

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('sportscenters', null, {});

  }
};
