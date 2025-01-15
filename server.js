


// import express from 'express';
// import connectDB from './config/db.js';  // Database connection
// import parkingLotRoutes from './routes/parkingLotRoutes.js'; // Use parking lot routes
// import cors from 'cors';
// import path from 'path';
// import dotenv from 'dotenv';
// import { fileURLToPath } from 'url';

// // Load environment variables
// dotenv.config({ path: './config.env' });

// // Resolve __dirname for ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Connect to MongoDB
// connectDB();

// const app = express();

// // Middleware to parse JSON requests
// app.use(express.json());
// app.use(cors());

// // Basic route for home page
// app.get("/home", (req, res) => {
//     res.send("Welcome to the Parking System!");
// });

// // Use parking lot routes with prefix '/api'
// app.use('/api', parkingLotRoutes);

// // Serve static files for React frontend (if any)
// app.use(express.static(path.join(__dirname, './client/build')));

// // If React frontend is used, this will serve the React app
// app.get('*', function (_, res) {
//     res.sendFile(path.join(__dirname, './client/build/index.html'), function (err) {
//         if (err) {
//             res.status(500).send(err);
//         }
//     });
// });

// // Handle invalid routes
// app.use((req, res) => {
//     res.status(404).json({ message: 'Route not found. Please check the URL.' });
// });

// // Define the port
// const PORT = process.env.PORT || 5000;

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });


import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import connectDB from './config/db.js';
import parkingLotRoutes from './routes/parkingLotRoutes.js';

dotenv.config({ path: './config.env' });

const app = express();

// Connect to MongoDB
connectDB();

// CORS Middleware
const corsOptions = {
    origin: [process.env.MONGO_URI, 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json());

// Debugging Middleware (for development only)
if (process.env.NODE_ENV !== 'production') {
    app.use((req, res, next) => {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
        console.log('Body:', req.body);
        next();
    });
}

// Parking lot routes
app.use('/api', parkingLotRoutes);

// Serve frontend for production
if (process.env.NODE_ENV === 'production') {
    const clientBuildPath = path.resolve('client', 'build');
    app.use(express.static(clientBuildPath));

    app.get('*', (req, res) => {
        res.sendFile(path.join(clientBuildPath, 'index.html'));
    });
} else {
    // Home route for development
    app.get('/', (req, res) => {
        res.send('HomePage Of The Parking System Management App');
    });
}

// 404 Error Handling for undefined routes
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// Global error handler
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(err.status || 500).json({
        message: err.message || 'Something went wrong!',
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
