import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();

// Import all routes components with file extensions
import userRoutes from "./routes/UserRoute.js";
import parkingLotRoutes from "./routes/ParkingLotRoutes.js";
import reservationRoutes from "./routes/ReservationRoutes.js";
import paymentRoutes from "./routes/PaymentRoutes.js";

// Middleware to parse JSON data
app.use(express.json());
app.use(cors({
    origin: "*"
}));

// Connect to MongoDB function
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydatabase', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
};

// Call the database connection function
connectDB();

// API routes
app.use("/api/users", userRoutes);
app.use("/api/parking-lot", parkingLotRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/payments", paymentRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
