import express from 'express';
const router = express.Router();
import paymentController from '../controllers/paymentController';


//create a new payment
router.post ("/create", paymentController.createPayment);

//get payment by reservation id
router.get("/reservation/:reservationId", paymentController.getPaymentByReservationId);

export default router;
