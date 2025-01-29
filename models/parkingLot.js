const mongoose = require('mongoose');

// Define the schema for a parking lot
const parkingLotSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    vehicleNumber: {
        type: String,
        required: true,
    },
    vehicleType: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    rentPerHour: {
        type: Number,
        default: 50,  // You can keep a default or set it when creating a new slot
    },
    totalRent: {
        type: Number,
        default: 0, // This will be calculated based on duration and rentPerHour
    },
    arrivalTime: {
        type: String,
    },
    bookingDate: {
        type: Date,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Add a method to calculate the total rent based on duration and rent per hour
parkingLotSchema.methods.calculateTotalRent = function () {
    this.totalRent = this.duration * this.rentPerHour;
};

// Export the ParkingLot model
const ParkingLot = mongoose.model('ParkingLot', parkingLotSchema);

module.exports = ParkingLot;