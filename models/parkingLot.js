// Importing any required modules (if necessary)
import mongoose from 'mongoose';

// Define the schema for a parking lot
const parkingLotSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    occupiedSpots: {
        type: Number,
        default: 0,
    },
    hourlyRate: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Add a method to check availability
parkingLotSchema.methods.checkAvailability = function () {
    return this.capacity > this.occupiedSpots;
};

// Add a method to park a car
parkingLotSchema.methods.parkCar = function () {
    if (this.checkAvailability()) {
        this.occupiedSpots += 1;
        return true;
    }
    return false;
};

// Add a method to leave a car spot
parkingLotSchema.methods.leaveCar = function () {
    if (this.occupiedSpots > 0) {
        this.occupiedSpots -= 1;
        return true;
    }
    return false;
};

// Export the ParkingLot model
const ParkingLot = mongoose.model('ParkingLot', parkingLotSchema);

export default ParkingLot;