import express from 'express';
import mongoose from 'mongoose';
import connectDB from './config/db';
import parkingLotRoutes from './routes/parkingLotRoutes.js'; // Correct import path
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

connectDB();

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());
app.use('/routes/pakingLotRoutes');

// Use parking lot routes
app.use('/parkinglots', parkingLotRoutes); // Register routes

// Add a route for the root path to avoid the "Cannot GET /" error
app.get('/', (req, res) => {
    res.send('Welcome to the Parking System API!');
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
