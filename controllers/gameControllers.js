const models = require("../models/index");
const { Op } = require('sequelize');
const gameController = {};



const { encryptPassword } = require("../services/auth.service");
require("dotenv").config();

//MOSTRAR TODOS LOS PARTIDOS
gameController.getGames = async (req, res) => {
    try {
        models.games.findAll().then((resp) => {
          return  res.send(resp);
        });
    } catch (error) {
      return  res.send(error);
    }
};

//PARTIDOS SEGUN  SPORTSCENTER
gameController.getGamesBySportscenter = async (req, res) => {
    try {
        let { sportscenterSportscenterId } = req.params;
        let resp = await models.games.findAll({
            where: { sportscenterSportscenterId: sportscenterSportscenterId },
        });
      return  res.send(resp);
    } catch (err) {
       return res.send(err);
    }
};



// REGISTRAR NUEVO PARTIDO(solo puede hacerlo el sportscenteradmin)
gameController.postNewGame = async (req, res) => {
    try {

        let data = req.body
        let resp = await models.games.create({
            type: data.type,
            players: data.players,
            date: data.date,
            sportscenterSportscenterId: data.sportscenterSportscenterId,
            
        })

        if (resp ) {
        return    res.send("Se ha creado el partido correctamente")
        } else {
         return   res.send("No se ha podido registar el partido")
           
        }

    } catch (err) {
      return  res.send(err)
    }
}


//BORRAR UN PARTIDO(solo puede hacerlo el sportscenteradmin)
gameController.deleteGame = async (req, res) => {
    try {
        let { game_id } = req.params;
        let resp = await models.games.destroy({
            where: { game_id: game_id },
        });
      return  res.json({ resp, message: "Se ha elminado el partido correctamente" });
    } catch (err) {
        return res.send(err)
    }
};








module.exports = gameController;
