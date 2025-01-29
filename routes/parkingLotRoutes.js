const express = require('express');
const router = express.Router();
const parkingLotController = require('../controllers/parkingLotControllers');

// Parking Slot CRUD routes
router.post('/lots', parkingLotController.createSlot); // Create a new parking slot
router.get('/lots', parkingLotController.getAllSlots); // Get all parking slots
router.get('/lots/:id', parkingLotController.getSlotById); // Get a parking slot by ID
router.put('/lots/:id', parkingLotController.updateSlot); // Update a parking slot by ID
router.delete('/lots/:id', parkingLotController.deleteSlot); // Delete a parking slot by ID

module.exports = router;