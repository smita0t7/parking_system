const express = require("express");
const router = express.Router();
const parkingLotController = require("../controllers/parkingLotControllers");

//create a new parking lot
router.post("/create", parkingLotController.createParkingLot);

//get all parking lots
router.get("/all", parkingLotController.getAllParkingLots);

//update available slots
router.put("/update", parkingLotController.updateAvailableSlots);

module.exports = router;