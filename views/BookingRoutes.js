const express = require("express");
const router = express.Router();
const {
  authBearerMiddleware,
  isValidRole,
  isValidUser,
} = require("../middlewares/authMiddleware");

const bookingController = require("../controllers/bookingControllers");

const models = require("../models/index");
const db = require("../db/db");

//MOSTRAR TODAS LAS RESERVAS(solo puede hacerlo el admin)
router.get("/", isValidRole("admin"), bookingController.getBookings);

// MOSTRAR DATOS DE RESERVAS SEGUN USUARIO
router.get("/bookings/:userUserId", bookingController.getBookingsByUser);

// // MODIFICAR DATOS DE RESERVA
// // router.put("/updateBooking/:email", isValidUser(), bookingController.updateGame);

// GENERAR NUEVA RESERVA
router.post("/newBooking", isValidUser(), bookingController.postNewBooking);

//BORRAR UNA RESERVA
router.delete( "/deleteBooking/:booking_id",  isValidRole("sportscenteradmin"), bookingController.deleteBooking);




module.exports = router;