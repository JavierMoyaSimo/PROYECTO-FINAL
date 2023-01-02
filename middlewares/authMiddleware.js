const jsonwebtoken = require("jsonwebtoken")

const models = require('../models/index')

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
    console.log(req.auth, "eldearribadsdsdsdsdsdsdsd")
    next();
  } catch (error) {
    res.status(401).json({ message: "You are not authenticated.1" });
    return;
  }

}

const isValidRole = (roleRoleId) => (req, res, next) => {
  console.log(req.auth, "esto es simplemente el auth")
  if (req.auth?.roleRoleId === roleRoleId) {

    next()
  } else {
    res.status(403).json({ message: "You are not authorized2" })

    console.log(roleRoleId, "Este es el rolRoleId")
    // console.log(payload, "esteespayload")
    console.log(req.auth?.roleRoleId, "Este es el del auth")

  }
}

const isValidUser = (email) => async (req, res, next) => {
  email = req.params.email || req.body.email
  console.log(email)
  console.log(req.auth.email)
  if (req.auth?.email === email) {
    next()
  } else {
    res.status(403).json({ message: "You are not authorized3" })
  }
}




// const isValidDni = (sportscenterid) => async (req, res, next) => {
//   const getsportcenterById = async (req, res) => {
    
//     try {
//       console.log("resprespresp", req.body)
//       let sportscenterid = req.body.sportscenterSportscenterId
//       console.log(sportscenterid, "jejeje")
//       let resp = await models.sportscenters.findAll({
//         where: { sportscenter_id: sportscenterid }
        
//       })
//       console.log("Soy la resp11 de la function" , resp)
//       res.send(resp)
//       console.log("Soy la resp de la function" , resp)
//     } catch (err) {
//       console.log(req.body.sportscenterSportscenterId)
//       res.send(err)    
//     }
//   }

//   getsportcenterById();
//   let sportscenter_dni = getsportcenterById.resp?.dni
//   if (req.auth?.dni === sportscenter_dni) {
//     next()
//   } else {
//     res.status(403).json({ message: "You are not authorizedDNI" })
//   }
// }

module.exports = {
  authBearerMiddleware,
  isValidRole,
  isValidUser,
  // isValidDni
};