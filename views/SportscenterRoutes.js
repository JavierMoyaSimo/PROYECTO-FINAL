const express = require('express');
const router = express.Router();

const {
    authBearerMiddleware,
    isValidRole,
    isValidUser,
  } = require("../middlewares/authMiddleware");

const sportscenterController = require('../controllers/sportscenterControllers')

const models = require('../models/index')
const db = require('../db/db');



//  LISTADO DE TODOS LOS SPORTSCENTERS
router.get('/', sportscenterController.getSportscenters)

//  SPORTSCENTER SEGUN SU ID
router.get("/id/:sportscenter_id", sportscenterController.getsportcenterById);

//  SPORTSCENTERS SEGUN SU PROVINCIA
router.get("/province/:province", sportscenterController.getSportscentersByProvince);

// REGISTAR NUEVO SPORTSCENTERS
router.post('/newSportscenter',authBearerMiddleware, isValidRole("admin"), sportscenterController.postNewSportscenter);


// BORRAR SPORTSCENTER
router.delete('/deleteSportscenter/:name', authBearerMiddleware, isValidRole("admin"), sportscenterController.deleteSportscenter);
   

  


module.exports = router

