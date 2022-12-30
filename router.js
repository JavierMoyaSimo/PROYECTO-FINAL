const express = require("express");
const router = express.Router();

const UserRoutes = require("./views/UserRoutes");
const SportscenterRoutes = require("./views/SportscenterRoutes");
const GameRoutes = require("./views/GameRoutes");
const BookingRoutes = require("./views/BookingRoutes");
const AuthRoutes = require("./views/AuthRoutes");
const { authBearerMiddleware } = require("./middlewares/authMiddleware");

//middleware para las rutas de auth
router.use("/auth", AuthRoutes);
// //middleware para las rutas de sportscenters
router.use("/sportscenters", SportscenterRoutes);
//middleware para las rutas de authBarer
router.use(authBearerMiddleware);
// //middleware para las rutas de user
router.use("/users", UserRoutes);

// //middleware para las rutas de games
// router.use("/games", GameRoutes);
// //middleware para las rutas de bookings
// router.use("/bookings", BookingRoutes);




module.exports = router;
