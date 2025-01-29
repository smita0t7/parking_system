const ParkingLot = require('../models/parkingLot'); // Your ParkingLot model

// Create a new parking slot
exports.createSlot = async (req, res) => {
    try {
        const { vehicleType, customerName, phoneNumber, vehicleNumber, duration, arrivalTime, bookingDate } = req.body;

        const rentPerHour = 50; // Default rent per hour
        const totalRent = (parseInt(duration, 10) || 0) * rentPerHour;

        const newSlot = new ParkingLot({
            customerName,
            phoneNumber,
            vehicleNumber,
            vehicleType,
            duration,
            rentPerHour,
            totalRent,
            arrivalTime: arrivalTime || null,
            bookingDate: bookingDate ? new Date(bookingDate) : null,
        });

        const savedSlot = await newSlot.save();
        res.status(201).json(savedSlot); // Return the newly created slot
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all parking slots
exports.getAllSlots = async (req, res) => {
    try {
        const allSlots = await ParkingLot.find();
        res.json(allSlots); // Return all parking slots
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a parking slot by ID
exports.getSlotById = async (req, res) => {
    try {
        const slot = await ParkingLot.findById(req.params.id);
        if (!slot) return res.status(404).json({ error: 'Slot not found' });
        res.json(slot); // Return the slot by ID
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a parking slot by ID
exports.updateSlot = async (req, res) => {
    try {
        const { id } = req.params;

        const { vehicleType, customerName, phoneNumber, vehicleNumber, duration, arrivalTime, bookingDate } = req.body;

        const rentPerHour = 50; // Default rent per hour
        const totalRent = (parseInt(duration, 10) || 0) * rentPerHour;

        const updatedSlot = await ParkingLot.findByIdAndUpdate(
            id,
            {
                vehicleType,
                customerName,
                phoneNumber,
                vehicleNumber,
                duration,
                rentPerHour,
                totalRent,
                arrivalTime,
                bookingDate,
            },
            { new: true } // Return the updated document
        );

        if (!updatedSlot) return res.status(404).json({ error: 'Slot not found' });
        res.json(updatedSlot); // Return the updated slot
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a parking slot by ID
exports.deleteSlot = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSlot = await ParkingLot.findByIdAndDelete(id);

        if (!deletedSlot) return res.status(404).json({ error: 'Slot not found' });

        res.json({ message: 'Slot deleted successfully' }); // Return success message
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};