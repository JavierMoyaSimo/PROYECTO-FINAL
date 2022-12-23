//Llamamos a nuestro archivo de configuracion 
const config = require("../config/config.json");
//Llamamos a sequelize
const { Sequelize } = require('sequelize');
//Llamamos a dotenv para usar el .env
require('dotenv').config()

//Le pasamos los PARAMETROS DE CONEXION con la base de datos
const sequelize = new Sequelize(

    process.env.DB_DATABASE || config.development.database,
    process.env.DB_USERNAME || config.development.username,
    process.env.DB_PASSWORD || config.development.password,
    {
        host: process.env.DB_HOST || config.development.host,
        port: process.env.DB_PORT || config.development.port,
        dialect: process.env.DB_DIALECT || config.development.dialect
    }

)

//EXPORTAMOS el modulo de sequelize para poder usarlo en el resto de archivos
module.exports = sequelize;