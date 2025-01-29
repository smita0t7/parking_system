const express = require('express');
const connectDB = require('./config/db.js');  // Database connection
const parkingLotRoutes = require('./routes/parkingLotRoutes.js'); // Use parking lot routes
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: './config.env' });  // Load environment variables


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