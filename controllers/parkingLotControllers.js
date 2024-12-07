import ParkingLot from '../models/parkingLot.js';

/**
 * Get all parking lots
 */
export const getAllParkingLots = async (req, res) => {
    try {
        const parkingLots = await ParkingLot.find();
        res.status(200).json(parkingLots);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Get a single parking lot by ID
 */
export const getParkingLotById = async (req, res) => {
    try {
        const parkingLot = await ParkingLot.findById(req.params.id);
        if (!parkingLot) {
            return res.status(404).json({ error: 'Parking lot not found' });
        }
        res.status(200).json(parkingLot);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Create a new parking lot
 */
export const createParkingLot = async (req, res) => {
    try {
        const newParkingLot = new ParkingLot(req.body);
        await newParkingLot.save();
        res.status(201).json(newParkingLot);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/**
 * Update a parking lot by ID
 */
export const updateParkingLot = async (req, res) => {
    try {
        const updatedParkingLot = await ParkingLot.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedParkingLot) {
            return res.status(404).json({ error: 'Parking lot not found' });
        }
        res.status(200).json(updatedParkingLot);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/**
 * Delete a parking lot by ID
 */
export const deleteParkingLot = async (req, res) => {
    try {
        const deletedParkingLot = await ParkingLot.findByIdAndDelete(req.params.id);
        if (!deletedParkingLot) {
            return res.status(404).json({ error: 'Parking lot not found' });
        }
        res.status(200).json({ message: 'Parking lot deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
