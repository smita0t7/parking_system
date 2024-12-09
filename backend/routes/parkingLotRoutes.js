import express from 'express';
import * as parkingLotController from '../controllers/parkingLotControllers.js'; // Correct import path
const router = express.Router();

// Create a new parking lot
router.post("/create", parkingLotController.createParkingLot);

// Get all parking lots
router.get("/all", parkingLotController.getAllParkingLots);

// Get a single parking lot by ID
router.get("/parkinglot/:id", parkingLotController.getParkingLotById);

// Update a parking lot by ID
router.put("/parkinglot/:id", parkingLotController.updateParkingLot);

// Delete a parking lot by ID
router.delete("/parkinglot/:id", parkingLotController.deleteParkingLot);

export default router;
