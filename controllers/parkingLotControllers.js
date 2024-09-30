const ParkingLot = require ("../models/parkingLot");

const parkingLotController = {
    createParkingLot: async(req,res) => {
        try{
            const {name, location, totalSlots, pricePerHour} = req.body;
            const newParkingLot = new ParkingLot({
                name,
                lation,
                totalSlots,
                available: totalSlots,
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

            res.status(200).json({mesage: "parking lot slots updated"});
        }
        catch(err){
            res.status(500).json({message:"server error"})
        }
    }
};

module.exports = parkingLotController;