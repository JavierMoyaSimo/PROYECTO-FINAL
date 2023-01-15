const models = require('../models/index')
const { Op } = require('sequelize');
const sportscenterController = {}


//LISTADO DE TODOS LOS SPORTSCENTERS
sportscenterController.getSportscenters = async (req, res) => {
    let resp = await models.sportscenters.findAll()

    res.send(resp)
}


// AQUI nuevo con dni


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

// REGISTRAR NUEVO SPORTCENTER(solo puede hacerlo el admin)
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

        if (!resp) {
            return res.send("No se ha podido registar el sportscenter")
           
        }
        return res.send("Se ha registrado el sportscenter correctamente")
        

    } catch (err) {
        res.send(err)
    }
}

// ELIMINAR UN SPORTSCENTER(solo puede hacerlo el admin)
sportscenterController.deleteSportscenter = async (req, res) => {
    try {
        let name = req.params.name
        let resp = await models.sportscenters.destroy({
            where: { name: name }
        })

        if (resp == 1) {
            res.send("Se ha eliminado el sportscenter correctamente")
        } else {
            res.send("No se ha podido eliminar el sportscenter")
        }

    } catch (err) {

    }
}


module.exports = sportscenterController