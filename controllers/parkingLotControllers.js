import ParkingLot from '../models/ParkingLot.js'; // Import the ParkingLot model

const parkingLotController = {
    createParkingLot: async (req, res) => {
        try {
            const { name, location, totalSlots, pricePerHour } = req.body;

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
                pricePerHour,
            });

            await newParkingLot.save();
            res.status(201).json({ message: "Parking lot created successfully" });
        } catch (err) {
            res.status(500).json({ message: "Server error", error: err.message });
        }
    },

    updateAvailableSlots: async (req, res) => {
        try {
            const { parkingLotId, availableSlots } = req.body;

            const parkingLot = await ParkingLot.findById(parkingLotId);

            if (!parkingLot) {
                return res.status(404).json({ message: "Parking lot not found" });
            }

            parkingLot.availableSlots = availableSlots;
            await parkingLot.save();

            res.status(200).json({ message: "Parking lot slots updated" });
        } catch (err) {
            res.status(500).json({ message: "Server error", error: err.message });
        }
    },

    getAllParkingLots: async (req, res) => {
        try {
            const parkingLots = await ParkingLot.find();
            res.status(200).json(parkingLots);
        } catch (err) {
            res.status(500).json({ message: "Server error", error: err.message });
        }
    },
};

export default parkingLotController;
