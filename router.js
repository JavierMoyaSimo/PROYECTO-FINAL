const express = require("express");
const router = express.Router();

const UserRoutes = require("./views/UserRoutes");
const SportscenterRoutes = require("./views/SportscenterRoutes");
const RingRoutes = require("./views/RingRoutes");
const BookingRoutes = require("./views/BookingRoutes");

// const AuthRoutes = require("./views/authRoutes");
// const { authBearerMiddleware } = require("./middlewares/authMiddleware");

//middleware para las rutas de auth
// router.use("/auth", AuthRoutes);

//middleware para las rutas de user
router.use("/users", UserRoutes);
//middleware para las rutas de sportscenters
router.use("/sportscenters", SportscenterRoutes);
//middleware para las rutas de rings
router.use("/rings", RingRoutes);
//middleware para las rutas de bookings
router.use("/bookings", BookingRoutes);

//middleware para las rutas de authBarer
// router.use(authBearerMiddleware);


module.exports = router;
