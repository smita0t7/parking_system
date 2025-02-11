const mongoose = require ('mongoose');

const connectDB = async () => {
    try {
        // await mongoose.connect('mongodb://localhost:27017/mydatabase');
        await mongoose.connect('mongodb+srv://smitasgi34:smitasgi34@smita.3qqxv.mongodb.net/?retryWrites=true&w=majority&appName=Smita');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
};

module.exports = connectDB;

