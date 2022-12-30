const models = require('../models/index')
const { Op } = require('sequelize');
const sportscenterController = {}


//LISTADO DE TODOS LOS SPORTSCENTERS
sportscenterController.getSportscenters = async (req, res) => {
    let resp = await models.sportscenters.findAll()

    res.send(resp)
}


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




module.exports = sportscenterController