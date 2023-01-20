const models = require("../models/index");

const userController = {};

const { encryptPassword } = require("../services/auth.service");
require("dotenv").config();

//MOSTRAR TODOS LOS USUARIOS
userController.getUsers = async (req, res) => {
  try {
    models.users.findAll().then((resp) => {
      return res.send(resp);
    });
  } catch (error) {
    return res.send(error);
  }
};

//USUARIO SEGUN SU EMAIL
userController.getUserByMail = async (req, res) => {
  try {
    let { email } = req.params;
    let resp = await models.users.findAll({
      where: { email: email },
    });
    return res.send(resp);
  } catch (err) {
    return res.send(err);
  }
};

// MODIFICAR DATOS DE USUARIO
userController.updateUser = async (req, res) => {
  try {
    let { email } = req.params;
    let user = req.body;
    let searchUser = await models.users.findOne({
      where: { email: req.auth.email },
    });
    let newPassword = searchUser.password;
    if (user.password) {
      newPassword = encryptPassword(user.password);
    }

    let resp = await models.users.update(
      {
        name: user.name,
        password: newPassword,
        phone: user.phone

      },
      {
        where: { email: email },
      }
    );
    return res.json({
      resp,
      message: "El usuario se ha modificado correctamente",
    });
  } catch (err) {
    return res.send(err)
  }
};

//BORRAR UN USUARIO(solo puede hacerlo el admin)
userController.deleteUser = async (req, res) => {
  try {
    let { email } = req.params;
    let resp = await models.users.destroy({
      where: { email: email },
    });
    return res.json({ resp, message: "Se ha elminado el usuario correctamente" });
  } catch (err) {
    return res.send(err)
  }
};








module.exports = userController;
