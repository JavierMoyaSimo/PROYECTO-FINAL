const models = require("../models/index");
const { Op } = require('sequelize');
const gameController = {};

const { encryptPassword } = require("../services/auth.service");
require("dotenv").config();

//MOSTRAR TODOS LOS PARTIDOS
gameController.getGames = async (req, res) => {
    try {
        models.games.findAll().then((resp) => {
            res.send(resp);
        });
    } catch (error) {
        res.send(error);
    }
};

//PARTIDOS SEGUN  SPORTSCENTER
gameController.getGamesBySportscenter = async (req, res) => {
    try {
        let { sportscenterSportscenterId } = req.params;
        let resp = await models.games.findAll({
            where: { sportscenterSportscenterId: sportscenterSportscenterId },
        });
        res.send(resp);
    } catch (err) {
        res.send(err);
    }
};

// MODIFICAR DATOS DE PARTIDO
// gameController.updateGame = async (req, res) => {
//     try {
//       let body = req.body;
//       let game = await models.games.findOne({
//         where: { game_id: body.game_id },
//       });
//       let bookingGame = await models.bookings.findOne({
//         where: {
//           game_id: games.game_id,
//         },
//       });
//       if (
//         body.email === req.auth?.email &&
//         games.game_id === bookingGame.game_id
//       ) {
//         let resp = await models.bookings.update(
//           {
//             players: players--,
//           },
//           {
//             where: {
//               game_id: bookingGame.game_id,
//             },
//           }
//         );
//       }
//       res.status(200).json({
//         message: `Ahora hay un jugador menos en el partido ${game.game_id}`,
//       });
//     } catch (error) {
//       res.json({ message: "este partido no está en la reserva" });
//       console.error(error);
//     }
//   };

// REGISTRAR NUEVO PARTIDO(solo puede hacerlo el sportscenteradmin)
gameController.postNewGame = async (req, res) => {
    try {
        let data = req.body
        let resp = await models.games.create({
            type: data.type,
            players: data.players,
            date: data.date,
            level: data.level,
            sportscenterSportscenterId: data.sportscenterSportscenterId,
            
        })

        if (resp ) {
            res.send("Se ha creado el partido correctamente")
        } else {
            res.send("No se ha podido registar el partido")
            console.log(resp, "Soy la respuestadelpartit")
        }

    } catch (err) {
        res.send(err)
    }
}


//BORRAR UN PARTIDO(solo puede hacerlo el sportscenteradmin)
gameController.deleteGame = async (req, res) => {
    try {
        let { game_id } = req.params;
        let resp = await models.games.destroy({
            where: { game_id: game_id },
        });
        res.json({ resp, message: "Se ha elminado el partido correctamente" });
    } catch (err) { }
};








module.exports = gameController;
