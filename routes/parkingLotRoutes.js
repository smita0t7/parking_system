import express from 'express';
import {
    createSlot,
    getAllSlots,
    getSlotById,
    updateSlot,
    deleteSlot,
} from '../controllers/parkingLotControllers.js'; // Import the named exports

const router = express.Router();

// Parking Slot CRUD routes
router.post('/lots', createSlot); // Create a new parking slot
router.get('/lots', getAllSlots); // Get all parking slots
router.get('/lots/:id', getSlotById); // Get a parking slot by ID
router.put('/lots/:id', updateSlot); // Update a parking slot by ID
router.delete('/lots/:id', deleteSlot); // Delete a parking slot by ID

export default router;
