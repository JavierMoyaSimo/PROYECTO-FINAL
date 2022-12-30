const express = require("express");
const router = express.Router();
const {
  authBearerMiddleware,
  isValidRole,
  isValidUser,
} = require("../middlewares/authMiddleware");

const userController = require("../controllers/userControllers");

const models = require("../models/index");
const db = require("../db/db");

//Traer todos los users
router.get("/", isValidRole("admin"), userController.getUsers);

// MOSTRAR DATOS DE USUARIO SEGUN MAIL
router.get("/user/:email", isValidUser(), userController.getUserByMail);

// MODIFICAR DATOS DE USUARIO
router.put("/updateUser/:email", isValidUser(), userController.updateUser);

//BORRAR UN USUARIO(solo puede hacerlo el admin)
router.delete( "/deleteUser/:email",  isValidRole("admin"),  userController.deleteUser);

// REGISTAR NUEVO SPORTSCENTERS
router.post('/newSportscenter', isValidRole("admin"), userController.postNewSportscenter);

// BORRAR SPORTSCENTER
router.delete('/deleteSportscenter/:name', isValidRole("admin"), userController.deleteSportscenter);

module.exports = router;
