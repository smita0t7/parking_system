import ParkingLot from '../models/parkingLot.js';

/**
 * Create a new parking slot
 */
export const createParkingSlot = async (req, res) => {
    try {
        const { customerName, phoneNumber, vehicleNumber, vehicleType, duration } = req.body;

        // Validate required fields
        if (!customerName || !phoneNumber || !vehicleNumber || !vehicleType || !duration) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        const totalRent = duration * 50; // Default rent per hour

        const newParkingSlot = new ParkingLot({
            customerName,
            phoneNumber,
            vehicleNumber,
            vehicleType,
            duration,
            rentPerHour: 50,
            totalRent,
            arrivalTime: new Date(),
            bookingDate: new Date(),
        });

        const savedParkingSlot = await newParkingSlot.save();
        res.status(201).json(savedParkingSlot);
    } catch (err) {
        console.error('Error creating parking slot:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

/**
 * Get all parking slots
 */
export const getAllParkingSlots = async (req, res) => {
    try {
        const parkingSlots = await ParkingLot.find();
        res.status(200).json(parkingSlots);
    } catch (err) {
        console.error('Error fetching parking slots:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

/**
 * Get a single parking slot by ID
 */
export const getParkingSlotById = async (req, res) => {
    try {
        const { id } = req.params;
        const parkingSlot = await ParkingLot.findById(id);

        if (!parkingSlot) {
            return res.status(404).json({ error: 'Parking slot not found' });
        }

        res.status(200).json(parkingSlot);
    } catch (err) {
        console.error('Error fetching parking slot:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

/**
 * Update a parking slot by ID
 */
export const updateParkingSlot = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedParkingSlot = await ParkingLot.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedParkingSlot) {
            return res.status(404).json({ error: 'Parking slot not found' });
        }

        res.status(200).json(updatedParkingSlot);
    } catch (err) {
        console.error('Error updating parking slot:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

/**
 * Delete a parking slot by ID
 */
export const deleteParkingSlot = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedParkingSlot = await ParkingLot.findByIdAndDelete(id);

        if (!deletedParkingSlot) {
            return res.status(404).json({ error: 'Parking slot not found' });
        }

        res.status(200).json({ message: 'Parking slot deleted successfully' });
    } catch (err) {
        console.error('Error deleting parking slot:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
