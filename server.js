import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import connectDB from './config/db.js';
import parkingLotRoutes from './routes/parkingLotRoutes.js';

// Load environment variables
dotenv.config({ path: './config.env' });

const app = express();

// Connect to MongoDB
connectDB();

// CORS Middleware
const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Frontend URL for CORS
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json());

// Debugging Middleware (development only)
if (process.env.NODE_ENV !== 'production') {
    app.use((req, res, next) => {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
        console.log('Body:', req.body);
        next();
    });
}

// Parking lot routes
app.use('/api', parkingLotRoutes);

// Serve frontend (production only)
if (process.env.NODE_ENV === 'production') {
    const clientBuildPath = path.resolve('client', 'build');
    app.use(express.static(clientBuildPath));

    app.get('*', (req, res) => {
        res.sendFile(path.join(clientBuildPath, 'index.html'));
    });
} else {
    // Home route for development
    app.get('/', (req, res) => {
        res.send('Welcome to the Parking System Management App');
    });
}

// 404 Error Handling
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode at http://localhost:${PORT}`);
});
