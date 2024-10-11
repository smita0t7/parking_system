import express from 'express';
import parkingLotController from "../controllers/parkingLotControllers";
const router = express.Router();

//create a new parking lot
router.post("/create", parkingLotController.createParkingLot);

//get all parking lots
router.get("/all", parkingLotController.getAllParkingLots);

//update available slots
router.put("/update", parkingLotController.updateAvailableSlots);

export default router;