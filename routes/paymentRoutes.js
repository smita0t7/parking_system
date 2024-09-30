const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController'); 

//create a new payment
router.post ("/create", paymentController.createPayment);

//get payment by reservation id
router.get("/reservation/:reservationId", paymentController.getPaymentByReservationId);

module.exports = router;
