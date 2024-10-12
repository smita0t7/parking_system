import express from 'express';

import paymentController from '../controllers/paymentController.js';
const router = express.Router();

//create a new payment
router.post ("/create", paymentController.createPayment);

//get payment by reservation id
router.get("/reservation/:reservationID", paymentController.getPaymentsByReservation);


export default router;
