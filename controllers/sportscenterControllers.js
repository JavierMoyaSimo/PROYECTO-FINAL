const models = require('../models/index')
const { Op } = require('sequelize');
const sportscenterController = {}


//LISTADO DE TODOS LOS SPORTSCENTERS
sportscenterController.getSportscenters = async (req, res) => {
    let resp = await models.sportscenters.findAll()

    res.send(resp)
}

//LISTADO PELICULAS MAS VALORADAS
// sportscenterController.getTopsportscenters = async (req, res) => {
//     try {
//         let resp = await models.sportscenters.findAll({
//             where: { rating: '5' }
//         })
//         res.send(resp)
//     } catch (err) {
//         res.send(err)
//     }
// }

//SPORTSCENTER SEGUN SU ID
sportscenterController.getsportcenterById = async (req, res) => {
    try {
        let sportscenter_id = req.params.sportscenter_id
        let resp = await models.sportscenters.findAll({
            where: { sportscenter_id: sportscenter_id }
        })
        res.send(resp)
    } catch (err) {
        res.send(err)
    }
}

// SPORTSCENTER SEGUN SU PROVINCIA
sportscenterController.getSportscentersByProvince = async (req, res) => {
    try {
        let province = req.params.province
        let resp = await models.sportscenters.findAll({
            where: {
                province: { [Op.like]: "%" + province + "%" }
            }
        })
        res.send(resp)
    } catch (err) {
        res.send(err)
    }
}

// LISTADO DE PELICULAS SEGUN SU GENERO
// sportscenterController.getsportscentersByGenre = async (req, res) => {
//     try {
//         let genre = req.params.genre
//         let resp = await models.sportscenters.findAll({
//             attributes: ['title', 'genre'],
//             where: {
//                 genre: {[Op.like]:"%"+genre+"%"}
//             }
//         })
//         res.send(resp)
//     } catch (err) {
//         res.send(err)
//     }
// }

// REGISTRAR NUEVO SPORTCENTER
sportscenterController.postNewSportscenter = async (req, res) => {
    try {
        let data = req.body
        let resp = await models.sportscenters.create({
            name: data.name,
            description: data.description,
            phone: data.phone,
            address: data.address,
            province: data.province,
            rings: data.rings,
            timetable: data.timetable,
            dni: data.dni

        })

        if (resp ) {
            res.send("Se ha registrado el sportscenter correctamente")
        } else {
            res.send("No se ha podido registar el sportscenter")
            console.log(resp, "Soy la respuesta")
        }

    } catch (err) {
        res.send(err)
    }
}

// ELIMINAR UNA PELICULA
// sportscenterController.deleteMovie = async (req, res) => {
//     try{
//         let title = req.params.title
//         let resp = await models.sportscenters.destroy({
//             where: { title: title }
//         })

//         if(resp == 1) {
//             res.send("Se ha eliminado la pelicula correctamente")
//         } else {
//             res.send("No se ha podido eliminar la pelicula")
//         }

//     } catch(err) {

//     }
// }

module.exports = sportscenterController