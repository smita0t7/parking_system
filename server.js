const express = require ("express");
const mongoose = require ("mongoose");
const cors = require("cors");
const app = express();

//import all routes component
const userRoutes = require("./routes/userRoutes");
const parkingLotRoutes = require("./routes/parkingLotRoutes");
const reservationRoutes = require("./routes/resrvationRoutes");
const paymentRoutes = require("./routes/paymentRoutes");


//middleware to parse json data
app.use(express.json());

//api routes
app.use("/api/users", userRoutes);
app.use("/api/parking-lot", parkingLotRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/payments", paymentRoutes);

//import 

//connect to mongoDb
connectDB();

//start server
const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`);
});