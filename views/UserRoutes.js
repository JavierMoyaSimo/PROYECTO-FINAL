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

//MOSTRAR TODOS LOS USUARIOS
router.get("/", isValidRole("admin"), userController.getUsers);

// MOSTRAR DATOS DE USUARIO SEGUN MAIL
router.get("/user/:email", isValidUser(), userController.getUserByMail);

// MODIFICAR DATOS DE USUARIO
router.put("/updateUser/:email", isValidUser(), userController.updateUser);

//BORRAR UN USUARIO(solo puede hacerlo el admin)
router.delete( "/deleteUser/:email",  isValidRole("admin"),  userController.deleteUser);




module.exports = router;
