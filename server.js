import express from 'express';
import mongoose from 'mongoose';
import parkingLotRoutes from './routes/parkingLotRoutes.js'; // Correct import path

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/parking-system', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected successfully!'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Use parking lot routes
app.use('/parkinglots', parkingLotRoutes); // Register routes

// Add a route for the root path to avoid the "Cannot GET /" error
app.get('/', (req, res) => {
    res.send('Welcome to the Parking System API!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
