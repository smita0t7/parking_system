import express from 'express'; // Import Express
import mongoose from 'mongoose'; // Import Mongoose
import {
    getAllParkingLots,
    getParkingLotById,
    createParkingLot,
    updateParkingLot,
    deleteParkingLot,
} from './controllers/parkingLotControllers.js'; // Import Controller Functions

const app = express(); // Create an Express App
const PORT = 3000; // Define the Port Number

// Middleware to Parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/parking-system', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected successfully!'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define Routes for Parking Lots
app.get('/parkinglots', getAllParkingLots);         // Get all parking lots
app.get('/parkinglots/:id', getParkingLotById);     // Get a specific parking lot by ID
app.post('/parkinglots', createParkingLot);         // Create a new parking lot
app.put('/parkinglots/:id', updateParkingLot);      // Update a parking lot by ID
app.delete('/parkinglots/:id', deleteParkingLot);   // Delete a parking lot by ID

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});