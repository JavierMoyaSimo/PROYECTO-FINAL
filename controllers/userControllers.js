const models = require("../models/index");

const userController = {};

const { encryptPassword } = require("../services/auth.service");
require("dotenv").config();

//Get All Users

userController.getUsers = async (req, res) => {
  try {
    models.users.findAll().then((resp) => {
      res.send(resp);
    });
  } catch (error) {
    res.send(error);
  }
};

//USUARIO SEGUN SU EMAIL
userController.getUserByMail = async (req, res) => {
  try {
    let { email } = req.params;
    let resp = await models.users.findAll({
      where: { email: email },
    });
    res.send(resp);
  } catch (err) {
    res.send(err);
  }
};

// MODIFICAR DATOS DE USUARIO
userController.updateUser = async (req, res) => {
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
      phone: user.phone,
      level: user.level,
      
    },
    {
      where: { email: email },
    }
  );
  res.json({
    resp,
    message: "El usuario se ha modificado correctamente",
  });
};

//BORRAR UN USUARIO(solo puede hacerlo el admin)

userController.deleteUser = async (req, res) => {
  try {
    let { email } = req.params;
    let resp = await models.users.destroy({
      where: { email: email },
    });
    res.json({ resp, message: "Se ha elminado el usuario correctamente" });
  } catch (err) {}
};

module.exports = userController;
