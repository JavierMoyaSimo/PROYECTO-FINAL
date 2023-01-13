const express = require("express");
const router = express.Router();
const {
  authBearerMiddleware,
  isValidRole,
  isValidUser,
  // isValidDni
} = require("../middlewares/authMiddleware");

const gameController = require("../controllers/gameControllers");

const models = require("../models/index");
const db = require("../db/db");

//MOSTRAR TODOS LOS PARTIDOS
router.get("/", isValidRole("sportscenteradmin"), gameController.getGames);

// MOSTRAR DATOS DE PARTIDOS SEGUN SPORTSCENTER
router.get("/games/:sportscenterSportscenterId", gameController.getGamesBySportscenter);


// REGISTAR NUEVO PARTIDO(solo puede hacerlo el sportscenteradmin)
router.post('/newGame', isValidRole("sportscenteradmin"), gameController.postNewGame);

//BORRAR UN PARTIDO(solo puede hacerlo el sportscenteradmin)
router.delete( "/deleteGame/:game_id",  isValidRole("sportscenteradmin"),  gameController.deleteGame);




module.exports = router;