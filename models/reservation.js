const mongoose = require('mongoose');
const { Schema } = mongoose;

const reservationSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    parkingLot:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ParkingLot',
        required: true
    },
    startTime:{
        type: Date,
        required: true
    },
    totalCost:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        enum:["reserved", "completed", "cancelled"],
        default: "reserved"
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("reservation", reservationSchema);