const models = require('../models/index')
const crypto = require('node:crypto')

const assertValidPassword = (pass) => {
  if (pass.length < 8) {
    throw new Error("Password must be at least 8 characters long");
  }
  // validate it has one lower case letter
  if (!pass.match(/[a-z]/)) {
    throw new Error("Password must contain at least one lower case letter");
  }
  // validate it has one upper case letter
  if (!pass.match(/[A-Z]/)) {
    throw new Error("Password must contain at least one upper case letter")
  }
  // validate it has one number
  if (!pass.match(/[0-9]/)) {
    throw new Error("Password must contain at least one number")
  }
}

const assertEmailIsValid = (email) => {
    // must validate a valid email
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return emailRegex.test(email);
  const isValid = email.match(emailRegex);
  if (!isValid) {
    throw new Error("Email is invalid")
  }
};

const assertEmailIsUnique = async (email) => {
    // validate email is unique
  const user = await models.users.findOne({
    where: {email:email}
  });
  if (user) {
    throw new Error("Email is already registered")
  }
};

const encryptPassword = (password) => {
  const hash = crypto
    .createHmac("sha512", '')
    .update(password)
    .digest("base64");
  return hash;
}

const createUser = async (userBody) => {
  const hash = encryptPassword(userBody.password);
    userBody.password = hash;
  const user = await models.users.create({
    name: userBody.name,
    email: userBody.email,
    password: userBody.password,
    phone:userBody.phone,
    role: userBody.role,
    dni: userBody.dni,
    level:userBody.level      
    
  });
  return user;
}

module.exports = {
  assertValidPassword,
  assertEmailIsValid,
  assertEmailIsUnique,
  encryptPassword,
  createUser
}