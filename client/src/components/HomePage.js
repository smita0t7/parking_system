// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   Container,
//   Typography,
//   Button,
//   Box,
//   Grid,
//   Card,
//   CardContent,
//   CircularProgress,
// } from "@mui/material";
// import LocalParkingIcon from "@mui/icons-material/LocalParking";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import AddIcon from "@mui/icons-material/Add";
// import SearchIcon from "@mui/icons-material/Search";
// import GroupIcon from "@mui/icons-material/Group";
// import axios from "axios";
// import { motion } from "framer-motion";

// const ParkingHomePage = () => {
//   const TOTAL_SLOTS = 1000; // Maximum parking slots
//   const [stats, setStats] = useState({
//     totalBookedSlots: 0,
//     availableSlots: TOTAL_SLOTS,
//     recentBooking: null,
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/slots") // Fetch slots data from backend
//       .then((res) => {
//         const slots = res.data;

//         // Calculate total booked slots and available slots
//         const totalBookedSlots = slots.filter((slot) => slot.vehicleNumber).length;
//         const availableSlots = TOTAL_SLOTS - totalBookedSlots;

//         // Find the most recent booking
//         const recentBooking = slots
//           .filter((slot) => slot.vehicleNumber) // Consider only booked slots
//           .sort((a, b) => new Date(b.date) - new Date(a.date))[0]?.customerName;

//         setStats({
//           totalBookedSlots,
//           availableSlots,
//           recentBooking: recentBooking || "No recent bookings",
//         });
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching parking slot stats:", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Container
//       maxWidth="lg"
//       sx={{
//         textAlign: "center",
//         py: 5,
//         backgroundColor: "#f4f4f4",
//         borderRadius: 2,
//         boxShadow: 3,
//         mt: 3,
//         mb: 3,
//       }}
//     >
//       {/* Animated Title */}
//       <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
//         <Typography variant="h2" component="h1" color="primary" gutterBottom sx={{ fontWeight: "bold" }}>
//           Parking System Management
//         </Typography>
//       </motion.div>

//       {/* Animated Subtitle */}
//       <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
//         <Typography variant="h4" color="textSecondary" gutterBottom>
//           Park your vehicles without any chaos
//         </Typography>
//       </motion.div>

//       {/* Stats Cards */}
//       <Grid container spacing={4} mt={6} justifyContent="center">
//         <Grid item xs={12} md={4}>
//           <Card sx={{ height: "100%", display: "flex", alignItems: "center" }}>
//             <CardContent sx={{ textAlign: "center", width: "100%" }}>
//               <LocalParkingIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
//               <Typography variant="h4" gutterBottom>
//                 {stats.totalBookedSlots}
//               </Typography>
//               <Typography variant="subtitle1" color="text.secondary">
//                 Total Booked Slots
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         <Grid item xs={12} md={4}>
//           <Card sx={{ height: "100%", display: "flex", alignItems: "center" }}>
//             <CardContent sx={{ textAlign: "center", width: "100%" }}>
//               <CreditCardIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
//               <Typography variant="h4" gutterBottom>
//                 {stats.availableSlots}
//               </Typography>
//               <Typography variant="subtitle1" color="text.secondary">
//                 Available Slots
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         <Grid item xs={12} md={4}>
//           <Card sx={{ height: "100%", display: "flex", alignItems: "center" }}>
//             <CardContent sx={{ textAlign: "center", width: "100%" }}>
//               <AccessTimeIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
//               <Typography variant="h4" gutterBottom>
//                 Latest Booking
//               </Typography>
//               <Typography variant="subtitle1" color="text.secondary">
//                 {stats.recentBooking}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       {/* Features Section */}
//       <Box sx={{ textAlign: "center", mb: 4 }}>
//         <Typography variant="h5" gutterBottom color="primary.light">
//           Available Features
//         </Typography>
//       </Box>

//       <Grid container spacing={2} justifyContent="center">
//         <Grid item xs={12} sm={6} md={4}>
//           <Button
//             component={Link}
//             to="/slots"
//             variant="contained"
//             size="large"
//             startIcon={<LocalParkingIcon />}
//             fullWidth
//             sx={{ py: 2 }}
//           >
//             View Slots
//           </Button>
//         </Grid>

//         <Grid item xs={12} sm={6} md={4}>
//         <Button
//   component={Link}
//   to="/add-slot" // Ensure this matches the route in App.js
//   variant="contained"
//   size="large"
//   startIcon={<AddIcon />}
//   fullWidth
//   sx={{ py: 2 }}
// >
//   Add New Slot
// </Button>
//         </Grid>

//         <Grid item xs={12} sm={6} md={4}>
//           <Button
//             component={Link}
//             to="/search"
//             variant="contained"
//             size="large"
//             startIcon={<SearchIcon />}
//             fullWidth
//             sx={{ py: 2 }}
//           >
//             Search Slots
//           </Button>
//         </Grid>

//         <Grid item xs={12} sm={6} md={4}>
//           <Button
//             component={Link}
//             to="/export"
//             variant="contained"
//             size="large"
//             startIcon={<GroupIcon />}
//             fullWidth
//             sx={{ py: 2 }}
//           >
//             Download Parking Slots List
//           </Button>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default ParkingHomePage;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   Container,
//   Typography,
//   Button,
//   Box,
//   Grid,
//   Card,
//   CardContent,
//   CircularProgress,
// } from "@mui/material";
// import LocalParkingIcon from "@mui/icons-material/LocalParking";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import AddIcon from "@mui/icons-material/Add";
// import SearchIcon from "@mui/icons-material/Search";
// import GroupIcon from "@mui/icons-material/Group";
// import axios from "axios";
// import { motion } from "framer-motion";

// const ParkingHomePage = () => {
//   const TOTAL_SLOTS = 1000; // Maximum parking slots
//   const [stats, setStats] = useState({
//     totalBookedSlots: 0,
//     availableSlots: TOTAL_SLOTS,
//     recentBooking: null,
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/slots") // Fetch slots data from backend
//       .then((res) => {
//         const slots = res.data;

//         // Calculate total booked slots and available slots
//         const totalBookedSlots = slots.filter((slot) => slot.vehicleNumber).length;
//         const availableSlots = TOTAL_SLOTS - totalBookedSlots;

//         // Find the most recent booking
//         const recentBooking = slots
//           .filter((slot) => slot.vehicleNumber) // Consider only booked slots
//           .sort((a, b) => new Date(b.date) - new Date(a.date))[0]?.customerName;

//         setStats({
//           totalBookedSlots,
//           availableSlots,
//           recentBooking: recentBooking || "No recent bookings",
//         });
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching parking slot stats:", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Container
//       maxWidth="lg"
//       sx={{
//         textAlign: "center",
//         py: 5,
//         backgroundColor: "#f4f4f4",
//         borderRadius: 2,
//         boxShadow: 3,
//         mt: 3,
//         mb: 3,
//       }}
//     >
//       {/* Animated Title */}
//       <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
//         <Typography variant="h2" component="h1" color="primary" gutterBottom sx={{ fontWeight: "bold" }}>
//           Parking System Management
//         </Typography>
//       </motion.div>

//       {/* Animated Subtitle */}
//       <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
//         <Typography variant="h4" color="textSecondary" gutterBottom>
//           Park your vehicles without any chaos
//         </Typography>
//       </motion.div>

//       {/* Stats Cards */}
//       <Grid container spacing={4} mt={6} justifyContent="center">
//         <Grid item xs={12} md={4}>
//           <Card sx={{ height: "100%", display: "flex", alignItems: "center" }}>
//             <CardContent sx={{ textAlign: "center", width: "100%" }}>
//               <LocalParkingIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
//               <Typography variant="h4" gutterBottom>
//                 {stats.totalBookedSlots}
//               </Typography>
//               <Typography variant="subtitle1" color="text.secondary">
//                 Total Booked Slots
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         <Grid item xs={12} md={4}>
//           <Card sx={{ height: "100%", display: "flex", alignItems: "center" }}>
//             <CardContent sx={{ textAlign: "center", width: "100%" }}>
//               <CreditCardIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
//               <Typography variant="h4" gutterBottom>
//                 {stats.availableSlots}
//               </Typography>
//               <Typography variant="subtitle1" color="text.secondary">
//                 Available Slots
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         <Grid item xs={12} md={4}>
//           <Card sx={{ height: "100%", display: "flex", alignItems: "center" }}>
//             <CardContent sx={{ textAlign: "center", width: "100%" }}>
//               <AccessTimeIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
//               <Typography variant="h4" gutterBottom>
//                 Latest Booking
//               </Typography>
//               <Typography variant="subtitle1" color="text.secondary">
//                 {stats.recentBooking}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       {/* Features Section */}
//       <Box sx={{ textAlign: "center", mb: 4 }}>
//         <Typography variant="h5" gutterBottom color="primary.light">
//           Available Features
//         </Typography>
//       </Box>

//       <Grid container spacing={2} justifyContent="center">
//         <Grid item xs={12} sm={6} md={4}>
//           <Button
//             component={Link}
//             to="/slots"
//             variant="contained"
//             size="large"
//             startIcon={<LocalParkingIcon />}
//             fullWidth
//             sx={{ py: 2 }}
//           >
//             View Slots
//           </Button>
//         </Grid>

//         <Grid item xs={12} sm={6} md={4}>
//         <Button
//   component={Link}
//   to="/add-slot" // Ensure this matches the route in App.js
//   variant="contained"
//   size="large"
//   startIcon={<AddIcon />}
//   fullWidth
//   sx={{ py: 2 }}
// >
//   Add New Slot
// </Button>
//         </Grid>

//         <Grid item xs={12} sm={6} md={4}>
//           <Button
//             component={Link}
//             to="/search"
//             variant="contained"
//             size="large"
//             startIcon={<SearchIcon />}
//             fullWidth
//             sx={{ py: 2 }}
//           >
//             Search Slots
//           </Button>
//         </Grid>

//         <Grid item xs={12} sm={6} md={4}>
//           <Button
//             component={Link}
//             to="/export"
//             variant="contained"
//             size="large"
//             startIcon={<GroupIcon />}
//             fullWidth
//             sx={{ py: 2 }}
//           >
//             Download Parking Slots List
//           </Button>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default ParkingHomePage;

import React, { useState, useEffect } from 'react'; // Regular imports at the top
import { Link } from 'react-router-dom';
import axios from 'axios'; // Keep axios import at the top
import BackgroundImage from '../assets/bg.jpg'; // Move this import here

import {
    Container,
    Typography,
    Button,
    Box,
    Grid,
    Card,
    CardContent,
    Divider,
    Slide,
    CircularProgress,
} from '@mui/material';

// Lazy load icons to improve performance
const GitHubIcon = React.lazy(() => import('@mui/icons-material/GitHub'));
const SearchIcon = React.lazy(() => import('@mui/icons-material/Search'));
const HomeIcon = React.lazy(() => import('@mui/icons-material/Home'));
const AddBusinessIcon = React.lazy(() => import('@mui/icons-material/AddBusiness'));
const BarChartIcon = React.lazy(() => import('@mui/icons-material/BarChart'));
const QrCodeIcon = React.lazy(() => import('@mui/icons-material/QrCode'));

const Homepage = React.memo(() => {
    const [stats, setStats] = useState({
        totalRooms: 0,
        availableRooms: 0,
        rentedRooms: 0,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch room data from the API
        axios.get('https://parkingsystem-8xdu.onrender.com/api/lots')
            .then((res) => {
                const rooms = res.data;
                const totalRooms = rooms.length;
                const availableRooms = rooms.filter(room => room.availability).length;
                const rentedRooms = totalRooms - availableRooms;

                setStats({ totalRooms, availableRooms, rentedRooms });
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching room data:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                sx={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box
            sx={{
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.5)', // Add a dark overlay
                    zIndex: 0,
                }}
            />
            <Container maxWidth="lg" sx={{ zIndex: 1, textAlign: 'center' }}>
                {/* Welcome Section */}
                <Box mb={6}>
                    <Typography
                        variant="h3"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontWeight: 800,
                            textShadow: '0 4px 12px rgba(0,0,0,0.7)',
                            color: '#ffffff',
                        }}
                    >
                        Welcome to Rental Management System
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                            color: '#f1f1f1',
                        }}
                    >
                        Efficiently manage your rentals with ease
                    </Typography>
                </Box>

                {/* Stats Section */}
                <Grid container spacing={4} mb={6}>
                    {[ 
                        { icon: <BarChartIcon />, value: stats.totalRooms, label: 'Total Rooms' },
                        { icon: <HomeIcon />, value: stats.availableRooms, label: 'Available Rooms' },
                        { icon: <AddBusinessIcon />, value: stats.rentedRooms, label: 'Rented Rooms' },
                    ].map((stat, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Slide direction="up" in={true} timeout={600 + index * 200}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                        color: 'white',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                                        textAlign: 'center',
                                    }}
                                >
                                    <CardContent>
                                        <Box sx={{ fontSize: 48 }}>{stat.icon}</Box>
                                        <Typography variant="h4">{stat.value}</Typography>
                                        <Typography variant="subtitle1">{stat.label}</Typography>
                                    </CardContent>
                                </Card>
                            </Slide>
                        </Grid>
                    ))}
                </Grid>

                {/* Action Section */}
                <Grid container spacing={3} justifyContent="center">
                    {[ 
                        { to: '/rooms', label: 'View Rooms', icon: <HomeIcon /> },
                        { to: '/create-room', label: 'Create Room', icon: <AddBusinessIcon /> },
                        { to: '/export', label: 'Export Data', icon: <BarChartIcon /> },
                        { href: 'https://github.com/smita0t7/parking_system', label: 'GitHub', icon: <GitHubIcon /> },
                        { to: '/search', label: 'Search Rooms', icon: <SearchIcon /> },
                        { to: '/qrcodes', label: 'QR Codes', icon: <QrCodeIcon /> },
                    ].map((action, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Button
                                component={action.href ? 'a' : Link}
                                to={action.to}
                                href={action.href}
                                variant="contained"
                                size="large"
                                startIcon={action.icon}
                                fullWidth
                                sx={{
                                    py: 2,
                                    backgroundColor: '#212121',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#424242',
                                    },
                                }}
                                aria-label={action.label} // For accessibility
                            >
                                {action.label}
                            </Button>
                        </Grid>
                    ))}
                </Grid>

                <Divider sx={{ my: 4 }} />
            </Container>
        </Box>
    );
});

export default Homepage;