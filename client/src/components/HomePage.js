import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import GroupIcon from "@mui/icons-material/Group";
import axios from "axios";
import { motion } from "framer-motion";

const ParkingHomePage = () => {
  const TOTAL_SLOTS = 1000; // Maximum parking slots
  const [stats, setStats] = useState({
    totalBookedSlots: 0,
    availableSlots: TOTAL_SLOTS,
    recentBooking: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/slots") // Fetch slots data from backend
      .then((res) => {
        const slots = res.data;

        // Calculate total booked slots and available slots
        const totalBookedSlots = slots.filter((slot) => slot.vehicleNumber).length;
        const availableSlots = TOTAL_SLOTS - totalBookedSlots;

        // Find the most recent booking
        const recentBooking = slots
          .filter((slot) => slot.vehicleNumber) // Consider only booked slots
          .sort((a, b) => new Date(b.date) - new Date(a.date))[0]?.customerName;

        setStats({
          totalBookedSlots,
          availableSlots,
          recentBooking: recentBooking || "No recent bookings",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching parking slot stats:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        textAlign: "center",
        py: 5,
        backgroundColor: "#f4f4f4",
        borderRadius: 2,
        boxShadow: 3,
        mt: 3,
        mb: 3,
      }}
    >
      {/* Animated Title */}
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <Typography variant="h2" component="h1" color="primary" gutterBottom sx={{ fontWeight: "bold" }}>
          Parking System Management
        </Typography>
      </motion.div>

      {/* Animated Subtitle */}
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
        <Typography variant="h4" color="textSecondary" gutterBottom>
          Park your vehicles without any chaos
        </Typography>
      </motion.div>

      {/* Stats Cards */}
      <Grid container spacing={4} mt={6} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%", display: "flex", alignItems: "center" }}>
            <CardContent sx={{ textAlign: "center", width: "100%" }}>
              <LocalParkingIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h4" gutterBottom>
                {stats.totalBookedSlots}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Total Booked Slots
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%", display: "flex", alignItems: "center" }}>
            <CardContent sx={{ textAlign: "center", width: "100%" }}>
              <CreditCardIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h4" gutterBottom>
                {stats.availableSlots}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Available Slots
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%", display: "flex", alignItems: "center" }}>
            <CardContent sx={{ textAlign: "center", width: "100%" }}>
              <AccessTimeIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h4" gutterBottom>
                Latest Booking
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {stats.recentBooking}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Features Section */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h5" gutterBottom color="primary.light">
          Available Features
        </Typography>
      </Box>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Button
            component={Link}
            to="/slots"
            variant="contained"
            size="large"
            startIcon={<LocalParkingIcon />}
            fullWidth
            sx={{ py: 2 }}
          >
            View Slots
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
        <Button
  component={Link}
  to="/add-slot" // Ensure this matches the route in App.js
  variant="contained"
  size="large"
  startIcon={<AddIcon />}
  fullWidth
  sx={{ py: 2 }}
>
  Add New Slot
</Button>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Button
            component={Link}
            to="/search"
            variant="contained"
            size="large"
            startIcon={<SearchIcon />}
            fullWidth
            sx={{ py: 2 }}
          >
            Search Slots
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Button
            component={Link}
            to="/export"
            variant="contained"
            size="large"
            startIcon={<GroupIcon />}
            fullWidth
            sx={{ py: 2 }}
          >
            Download Parking Slots List
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ParkingHomePage;