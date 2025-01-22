import ParkingLot from '../models/parkingLot.js';

// Utility function for manual validation
const validateSlotInput = (data) => {
    const errors = {};
    if (Array.isArray(data)) {
        // Handling multiple slots
        data.forEach((slot, index) => {
            if (!slot.customerName || typeof slot.customerName !== 'string') errors[`customerName-${index}`] = 'Customer name is required and must be a string.';
            if (!slot.phoneNumber || typeof slot.phoneNumber !== 'string') errors[`phoneNumber-${index}`] = 'Phone number is required and must be a string.';
            if (!slot.vehicleNumber || typeof slot.vehicleNumber !== 'string') errors[`vehicleNumber-${index}`] = 'Vehicle number is required and must be a string.';
            if (!slot.vehicleType || typeof slot.vehicleType !== 'string') errors[`vehicleType-${index}`] = 'Vehicle type is required and must be a string.';
            if (typeof slot.duration !== 'number' || slot.duration <= 0) errors[`duration-${index}`] = 'Duration is required and must be a positive number.';
        });
    } else {
        // Handling a single slot
        if (!data.customerName || typeof data.customerName !== 'string') errors.customerName = 'Customer name is required and must be a string.';
        if (!data.phoneNumber || typeof data.phoneNumber !== 'string') errors.phoneNumber = 'Phone number is required and must be a string.';
        if (!data.vehicleNumber || typeof data.vehicleNumber !== 'string') errors.vehicleNumber = 'Vehicle number is required and must be a string.';
        if (!data.vehicleType || typeof data.vehicleType !== 'string') errors.vehicleType = 'Vehicle type is required and must be a string.';
        if (typeof data.duration !== 'number' || data.duration <= 0) errors.duration = 'Duration is required and must be a positive number.';
    }
    return errors;
};

// Helper function to calculate total rent
const calculateTotalRent = (duration, rentPerHour = 50) => {
    if (isNaN(duration) || duration <= 0) return 0;
    return duration * rentPerHour;
};

// Create parking slots (handle both single and multiple)
// export const createSlot = async (req, res) => {
//     try {
//         const errors = validateSlotInput(req.body);
//         if (Object.keys(errors).length > 0) {
//             return res.status(400).json({ errors });
//         }

//         // If multiple slots are passed, insert them all at once
//         if (Array.isArray(req.body)) {
//             const slotsWithCalculatedRent = req.body.map(slot => {
//                 const totalRent = calculateTotalRent(slot.duration, slot.rentPerHour);
//                 return {
//                     ...slot,
//                     totalRent,
//                 };
//             });
//             const savedSlots = await ParkingLot.insertMany(slotsWithCalculatedRent);
//             return res.status(201).json(savedSlots);
//         }

//         // If only a single slot is passed
//         const { customerName, phoneNumber, vehicleNumber, vehicleType, duration, arrivalTime, bookingDate } = req.body;
//         const rentPerHour = 50; // default rent per hour
//         const totalRent = calculateTotalRent(duration, rentPerHour);

//         const newSlot = new ParkingLot({
//             customerName,
//             phoneNumber,
//             vehicleNumber,
//             vehicleType,
//             duration,
//             rentPerHour,
//             totalRent,
//             arrivalTime: arrivalTime ? new Date(arrivalTime) : null,
//             bookingDate: bookingDate ? new Date(bookingDate) : null,
//         });

//         const savedSlot = await newSlot.save();
//         res.status(201).json(savedSlot);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };
// parkingLotControllers.js

export const createSlot = async (req, res) => {
    try {
        const errors = validateSlotInput(req.body);  // Validate the data sent
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ errors });  // Return errors if any
        }

        // Handle multiple slots
        if (Array.isArray(req.body)) {
            const slotsWithCalculatedRent = req.body.map(slot => {
                const totalRent = calculateTotalRent(slot.duration, slot.rentPerHour);
                return {
                    ...slot,
                    totalRent,
                };
            });
            const savedSlots = await ParkingLot.insertMany(slotsWithCalculatedRent);
            return res.status(201).json(savedSlots);  // Return saved slots
        }

        // Handle a single slot
        const { customerName, phoneNumber, vehicleNumber, vehicleType, duration, arrivalTime, bookingDate } = req.body;
        const rentPerHour = 50;  // Default rent per hour
        const totalRent = calculateTotalRent(duration, rentPerHour);

        const newSlot = new ParkingLot({
            customerName,
            phoneNumber,
            vehicleNumber,
            vehicleType,
            duration,
            rentPerHour,
            totalRent,
            arrivalTime: arrivalTime ? new Date(arrivalTime) : null,
            bookingDate: bookingDate ? new Date(bookingDate) : null,
        });

        const savedSlot = await newSlot.save();
        res.status(201).json(savedSlot);  // Return the saved slot
    } catch (err) {
        console.error(err);  // Log the error for debugging
        res.status(500).json({ error: err.message });  // Return the error
    }
};


// Get all parking slots
export const getAllSlots = async (req, res) => {
    try {
        const allSlots = await ParkingLot.find();
        res.json(allSlots);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a parking slot by ID
export const getSlotById = async (req, res) => {
    try {
        const slot = await ParkingLot.findById(req.params.id);
        if (!slot) return res.status(404).json({ error: 'Slot not found.' });
        res.json(slot);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a parking slot by ID
export const updateSlot = async (req, res) => {
    try {
        const { id } = req.params;
        const errors = validateSlotInput(req.body);
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ errors });
        }

        const { customerName, phoneNumber, vehicleNumber, vehicleType, duration, arrivalTime, bookingDate } = req.body;
        const rentPerHour = 50;
        const totalRent = calculateTotalRent(duration, rentPerHour);

        const updatedSlot = await ParkingLot.findByIdAndUpdate(
            id,
            {
                customerName,
                phoneNumber,
                vehicleNumber,
                vehicleType,
                duration,
                rentPerHour,
                totalRent,
                arrivalTime: arrivalTime ? new Date(arrivalTime) : null,
                bookingDate: bookingDate ? new Date(bookingDate) : null,
            },
            { new: true }
        );

        if (!updatedSlot) return res.status(404).json({ error: 'Slot not found.' });
        res.json(updatedSlot);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a parking slot by ID
export const deleteSlot = async (req, res) => {
    try {
        const deletedSlot = await ParkingLot.findByIdAndDelete(req.params.id);
        if (!deletedSlot) return res.status(404).json({ error: 'Slot not found.' });
        res.json({ message: 'Slot deleted successfully.' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
