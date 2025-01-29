const mongoose = require ('mongoose');

const connectDB = async () => {
    try {
        // await mongoose.connect('mongodb://localhost:27017/mydatabase');
        await mongoose.connect('mongodb+srv://alibha04:alibha04@cluster1.ug2xy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
};

module.exports = connectDB

// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect('mongodb+srv://alibha04:alibha04@cluster1.ug2xy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.error(`Error: ${error.message}`);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;