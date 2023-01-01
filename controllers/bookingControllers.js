const models = require('../models/index')
const { Op } = require('sequelize');
const bookingController = {}




//MOSTRAR TODAS LAS RESERVAS
bookingController.getBookings = async (req, res) => {
    try {
        models.bookings.findAll().then((resp) => {
            res.send(resp);
        });
    } catch (error) {
        res.send(error);
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
            let repeated = await models.bookings.findOne({
                where: {
                    userUserId: req.auth.user_id,
                    gameGameId: game.game_id,
                }
            })
            if (!repeated) {
                let resp = await models.bookings.create({
                    userUserId: req.auth.user_id,
                    gameGameId: game.game_id
                })
                res.status(200).json({
                    resp,
                    email: req.auth?.email,
                    message: "Tu reserva se ha realizado correctamente"
                })
            } else {
                res.json({
                    message: "No se ha realizado la reserva, ya tienes este partido reservado"
                })
            }
        }
    } catch (err) {
        res.send(err)
    }
}
// //MODIFICAR DATOS DE UN PEDIDO              
// bookingController.updateOrder = async (req, res) => {
//     try {
//         let body = req.body;
//         let movie = await models.movies.findOne({
//             where: { title: body.title }
//         })
//         let orderedMovie = await models.orders.findOne({
//             where: {
//                 articleIdArticle: movie.articleIdArticle,
//             }
//         })
//         if (body.mail === req.auth?.mail && movie.articleIdArticle === orderedMovie.articleIdArticle) {
//             let resp = await models.orders.update({
//                 rentingDate: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
//             },
//                 {
//                     where: {
//                         articleIdArticle: orderedMovie.articleIdArticle
//                     }
//                 })
//         } res.status(200).json({
//             message: `Nueva fecha para la pelicula ${movie.title}`
//         })
//     } catch (error) {
//         res.json({ message: "esta pelicula no esta en el pedido" })
//         console.error(error)
//     }
// }

//MOSTRAR TODAS LAS RESERVAS DE UN USUARIO  
bookingController.getBookingsByUser = async (req, res) => {
    let resp = await models.bookings.findAll({
      where: {
        userUserId: req.auth.user_id
      }
    })
    res.status(200).json({
      resp,
      message: "Aquí estan tus reservas "
    })
}



//BORRAR UNA RESERVA
bookingController.deleteBooking = async (req, res) => {
    try{
        let {booking_id} = req.params
        let resp = await models.bookings.destroy({
            where: { booking_id: booking_id }
        });

        res.json({ resp, message: "Se ha elminado el partido correctamente" });
    } catch (err) { }
};
  






module.exports = bookingController