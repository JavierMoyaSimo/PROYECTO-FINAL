const express = require('express');
const router = express.Router()
const sportscenterController = require('../controllers/sportscenterControllers')

const models = require('../models/index')

const db = require('../db/db');



//  LISTADO DE TODOS LOS SPORTSCENTERS
router.get('/', sportscenterController.getSportscenters)


//  SPORTSCENTER SEGUN SU ID
router.get("/id/:sportscenter_id", sportscenterController.getsportcenterById);

//  SPORTSCENTERS SEGUN SU PROVINCIA
router.get("/province/:province", sportscenterController.getSportscentersByProvince);

// SPORTSCENTERS SEGUN SU GENERO
// router.get("/genre/:genre", sportscenterController.getMoviesByGenre);

//  // REGISTAR NUEVA SPORTSCENTERS
router.post('/newSportscenter', sportscenterController.postNewSportscenter);
   
// // BORRAR SPORTSCENTERS
// router.delete('/deleteMovie/:title', sportscenterController.deleteMovie);
  


module.exports = router

