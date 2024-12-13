// import express from 'express';
// import mongoose from 'mongoose';
// import connectDB from './config/db.js';
// import parkingLotRoutes from './routes/parkingLotRoutes.js'; // Correct import path
// //import parkingLot from './model/parkingLot.js';
// import cors from 'cors';
// import dotenv from 'dotenv';
// dotenv.config({ path: "./config.env" });

// connectDB();

// const app = express();
// const PORT = 3000;

// // Middleware to parse JSON requests
// app.use(express.json());
// app.use(cors());
// app.use('/routes/pakingLotRoutes');

// // Use parking lot routes
// app.use('/parkinglots', parkingLotRoutes); // Register routes

// // Add a route for the root path to avoid the "Cannot GET /" error
// app.get('/', (req, res) => {
//     res.send('Welcome to the Parking System API!');
// });

// // Start the server
// const port = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// });

import express from 'express';
import mongoose from 'mongoose';
import connectDB from './config/db.js'; // Ensure the file exists and the path is correct
import parkingLotRoutes from './routes/parkingLotRoutes.js'; // Ensure this path is correct
import cors from 'cors';
import dotenv from 'dotenv';

// Configure environment variables
dotenv.config({ path: "./config.env" });

// Connect to the database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000; // Use environment variable or fallback to 3000

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors());         // Enable CORS

// Routes
app.use('/parkinglots', parkingLotRoutes); // Ensure parkingLotRoutes is defined correctly

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the Parking System API!');
});

app.get('/details/:id', (req, res) => {
    const { id } = req.params;
    // Example response
    res.json({ id, description: `Details for parking ID ${id}` });
  });
  
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
