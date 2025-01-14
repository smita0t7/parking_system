// import express from 'express';
// import mongoose from 'mongoose';
// import connectDB from './config/db.js'; // Ensure your DB config is correctly set up
// import cors from 'cors';
// import dotenv from 'dotenv';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import fs from 'fs/promises'; // Use `fs` for reading JSON dynamically

// // Configure environment variables
// dotenv.config({ path: './config.env' });

// // Connect to the database
// connectDB();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Resolve __dirname in ES module scope
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Load sample data dynamically using fs
// let sampleData = [];
// (async () => {
//   try {
//     const data = await fs.readFile(path.join(__dirname, 'sample.json'), 'utf-8');
//     sampleData = JSON.parse(data); // Parse the JSON data
//     console.log('Sample data loaded successfully.');
//   } catch (err) {
//     console.error('Error loading sample data:', err);
//   }
// })();

// // Default route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Parking System API!');
// });

// // Fetch all parking lot details
// app.get('/api', (req, res) => {
//   res.json(sampleData);
// });

// // Fetch parking lot details by ID
// app.get('/details/:id', (req, res) => {
//   const { id } = req.params;

//   // Find parking lot by ID in the dummy data
//   const parkingDetails = sampleData.find((lot) => lot.id === id);

//   if (parkingDetails) {
//     res.json(parkingDetails);
//   } else {
//     res.status(404).json({ message: `Parking ID ${id} not found` });
//   }
// });

// // Serve static files for React frontend
// app.use(express.static(path.join(__dirname, './client/build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './client/build/index.html'), (err) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

// // Handle invalid routes
// app.use((req, res) => {
//   res.status(404).json({ message: 'Route not found. Please check the URL.' });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });


import express from 'express';
import connectDB from './config/db.js';  // Database connection
import parkingLotRoutes from './routes/parkingLotRoutes.js'; // Use parking lot routes
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config({ path: './config.env' });

// Resolve __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// Basic route for home page
app.get("/home", (req, res) => {
    res.send("Welcome to the Parking System!");
});

// Use parking lot routes with prefix '/api'
app.use('/api', parkingLotRoutes);

// Serve static files for React frontend (if any)
app.use(express.static(path.join(__dirname, './client/build')));

// If React frontend is used, this will serve the React app
app.get('*', function (_, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'), function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found. Please check the URL.' });
});

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
