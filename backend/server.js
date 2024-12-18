// import express from 'express';
// import mongoose from 'mongoose';
// import connectDB from './config/db.js';
// import parkingLotRoutes from './routes/parkingLotRoutes.js'; 
// import sampleData from './sample.json'; 

// import cors from 'cors';
// import dotenv from 'dotenv';

// // Configure environment variables
// dotenv.config({ path: "./config.env" });

// // Connect to the database
// connectDB();


// const app = express();
// const PORT = process.env.PORT || 5000; // Use environment variable or fallback to 3000

// // Middleware
// app.use(express.json()); // Parse JSON requests
// app.use(cors());         // Enable CORS

// // Routes
// app.use('/parkinglots', parkingLotRoutes); // Ensure parkingLotRoutes is defined correctly

// // Default route
// app.get('/', (req, res) => {
//     res.send('Welcome to the Parking System API!');
// });

// app.get('/details/:id', (req, res) => {
//     const { id } = req.params;
//     // Example response
//     res.json({ id, description: `Details for parking ID ${id}` });
//   });
  
// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// });

import express from 'express';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
const path = require('path');

// Configure environment variables
dotenv.config({ path: './config.env' });

// Connect to the database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Load sample data dynamically
let sampleData = [];
import('./sample.json', { assert: { type: 'json' } })
  .then((data) => {
    sampleData = data.default; // Access the default export of the JSON file
    console.log('Sample data loaded successfully.');
  })
  .catch((err) => {
    console.error('Error loading sample data:', err);
  });

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Parking System API!');
});

// Fetch all parking lot details
app.get('/parkinglots', (req, res) => {
  res.json(sampleData);
});

// Fetch parking lot details by ID
app.get('/details/:id', (req, res) => {
  const { id } = req.params;

  // Find parking lot by ID in the dummy data
  const parkingDetails = sampleData.find((lot) => lot.id === id);

  if (parkingDetails) {
    res.json(parkingDetails);
  } else {
    res.status(404).json({ message: `Parking ID ${id} not found` });
  }
});

// SERVE STATIC FILES
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});


// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found. Please check the URL.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

