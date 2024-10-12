import express from 'express';
import reservationController from '../controllers/reservationController.js';

const router = express.Router();


//create a new reservation 
router.post ("/create", reservationController.createReservation);

//get reservation by user ID
router.get("/user/:userId",reservationController.getReservationsByUser);

//update reservation status
router.put("/update-status", reservationController.updateReservationStatus);

export default router;