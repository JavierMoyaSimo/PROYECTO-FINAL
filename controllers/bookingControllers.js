const models = require('../models/index')
const { Op } = require('sequelize');
const bookingController = {}




//MOSTRAR TODAS LAS RESERVAS
bookingController.getBookings = async (req, res) => {
    try {
        models.bookings.findAll().then((resp) => {
            return res.send(resp);
        });
    } catch (error) {
        return res.send(error);
    }
};


// GENERAR NUEVA RESERVA 
bookingController.postNewBooking = async (req, res) => {
    try {
        let body = req.body;


        if (body.email === req.auth?.email) {
            let game = await models.games.findOne({
                where: { game_id: body.game_id }
            })
            //if(!game){}...
            let repeated = await models.bookings.findOne({
                where: {
                    gameGameId: game.game_id,
                }
            })
            if (!repeated) {
                let resp = await models.bookings.create({
                    userUserId: req.auth.user_id,
                    gameGameId: game.game_id
                })
                return res.status(200).json({
                    resp,
                    email: req.auth?.email,
                    message: "Tu reserva se ha realizado correctamente"
                })
            } else {
                return
                res.json({
                    message: "No se ha realizado la reserva,  este partido ya ha sido reservado"
                })
            }
        }

    } catch (err) {
        return res.send(err)
    }
}


//MOSTRAR TODAS LAS RESERVAS DE UN USUARIO  
bookingController.getBookingsByUser = async (req, res) => {
    try {
        let resp = await models.bookings.findAll({
            where: {
                userUserId: req.auth.user_id
            }
        })
        return res.status(200).json({
            resp,
            message: "Aquí estan tus reservas "
        })
    } catch (err) {
        return res.send(err)
    }
}



//BORRAR UNA RESERVA
bookingController.deleteBooking = async (req, res) => {
    try {
        let { booking_id } = req.params
        let resp = await models.bookings.destroy({
            where: { booking_id: booking_id }
        });

       return res.json({ resp, message: "Se ha elminado el partido correctamente" });
    } catch (err) {
        return res.send(err)
    }
};







module.exports = bookingController