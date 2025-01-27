import express from 'express';
import {
    createParkingSlot,
    getAllParkingSlots,
    getParkingSlotById,
    updateParkingSlot,
    deleteParkingSlot,
} from '../controllers/parkingLotControllers.js';

const router = express.Router();

// Create a parking slot
router.post('/', createParkingSlot);

// Get all parking slots
router.get('/', getAllParkingSlots);

// Get a single parking slot by ID
router.get('/:id', getParkingSlotById);

// Update a parking slot by ID
router.put('/:id', updateParkingSlot);

// Delete a parking slot by ID
router.delete('/:id', deleteParkingSlot);

export default router;
