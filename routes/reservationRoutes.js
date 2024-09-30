const express = require("express");
const router = express.router();
const reservationController = require("../controllers/reservationController");

//create a new reservation 
router.post ("/create", reservationController.createReservation);

//get reservation by user ID
router.get("/user/:userId",reservationController.getReservationsByUser);

//update reservation status
router.put("/update-status", reservationController.updateReservationStatus);

module.exports = router;