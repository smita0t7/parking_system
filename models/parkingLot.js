import mongoose from 'mongoose';

// Define the schema for a parking lot
const parkingLotSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    vehicleNumber: { type: String, required: true },
    vehicleType: { type: String, required: true },
    duration: { type: Number, required: true },
    rentPerHour: { type: Number, default: 50 },
    totalRent: { type: Number, default: 0 },
    arrivalTime: { type: Date, default: null },
    bookingDate: { type: Date, default: null },
    createdAt: { type: Date, default: Date.now },
});

// Middleware to calculate totalRent before saving
parkingLotSchema.pre('save', function (next) {
    if (!this.totalRent) {
        this.totalRent = this.duration * this.rentPerHour;
    }
    next();
});

// Export the ParkingLot model
const ParkingLot = mongoose.model('ParkingLot', parkingLotSchema);

export default parkingLot;
