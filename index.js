const express = require("express");
const db = require("./db/db");
const { sequelize } = require("./models/index");
const app = express();
const router = require("./router");
const cors = require("cors");

const PORT = process.env.PORT;

app.use(cors());
//SALTARSE POLITICA CORS DE GOOGLE CHROME PARA PRUEBAS LOCALES CON EL FRONTED
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE,OPTIONS"
  );
  next();
});

//INDICAMOS A EXPRESS QUE UTILICE ARCHIVOS .JSON
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor arrancado en el puerto ${PORT}`);

  //con sync({force: true}) se sincroniza sequelize con nuestra DB, force hace que pueda sobreescribir tablas
  //con authenticate no sobreescribe y es más ligero, pero también se sincroniza
  db.authenticate()
    .then(() => {
      console.log("Conectados a la DB");
    })
    .catch((error) => {
      console.log("Se ha producido un error: " + error);
    });
});