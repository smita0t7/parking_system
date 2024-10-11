const ParkingLot = require ("../models/parkingLot");

const parkingLotController = {
    createParkingLot: async(req,res) => {
        try{
            const {name, location, totalSlots, pricePerHour} = req.body;


            // Validation check for required fields
            if (!name || !location || !totalSlots || !pricePerHour) {
                return res.status(400).json({ message: "Please provide all required fields." });
            }

            // Data type validation
            if (isNaN(totalSlots) || isNaN(pricePerHour)) {
                return res.status(400).json({ message: "Total slots and price per hour must be valid numbers." });
            }


            
            const newParkingLot = new ParkingLot({
                name,
                location,
                totalSlots,
                availableSlots: totalSlots,
                pricePerHour
            });
            await newParkingLot.save();

            res.status(201).json({message:"parking lot created successfully"});
        }
        catch(err){
            res.status(500).json({message: "server error"});
        }
    },

    updateAvailableSlots: async(req, res) => {
        try{
            const {parkingLotId, availableSlots} = req.body;

            const parkingLot = await ParkingLot.findById(parkingLotId);

            if(!parkingLot){
                return res.status(404).json({message: "parking lot not found"});
            }
            parkingLot.availableSlots = availableSlots;
            await parkingLot.save();

            res.status(200).json({message: "parking lot slots updated"});
        }
        catch(err){
            res.status(500).json({message:"server error",
                error: err.message
            })
        }
    },

    getAllParkingLots: async (req, res) => { // New method added
        try {
            const parkingLots = await ParkingLot.find(); // Fetch all parking lots
            res.status(200).json(parkingLots); // Send back the parking lots
        } catch (err) {
            res.status(500).json({ message: "Server error", error: err.message });
        }
    }
};

module.exports = parkingLotController;