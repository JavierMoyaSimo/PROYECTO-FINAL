const jsonwebtoken = require("jsonwebtoken")


// MIDDLEWARE AUTENTICACION DE TOKEN
const authBearerMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  const [type, jwt] = authorization.split(" ");
  try {
    if (type.toLowerCase() !== "bearer") {
      throw new Error("Invalid type")
    }

    const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET)
    req.auth = payload;
    next();
  } catch (error) {
    res.status(401).json({ message: "You are not authenticated." });
    return;
  }

}

const isValidRole = (role) => (req, res, next) => {
  if (req.auth?.role === role) {
    
    next()
  } else {
    res.status(403).json({ message: "You are not authorized" })
  }
}

const isValidUser = (email) => async (req, res, next) => {
  email = req.params.email || req.body.email
  console.log(email)
  console.log(req.auth.email)
  if (req.auth?.email === email) {
    next()
  } else {
    res.status(403).json({ message: "You are not authorized" })
  }
}

module.exports = {
  authBearerMiddleware,
  isValidRole,
  isValidUser
};