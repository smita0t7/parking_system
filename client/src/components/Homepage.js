// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Typography, Button, Box, Grid } from '@mui/material';
// import { motion } from 'framer-motion';

// const Homepage = () => {
//     return (
//         <Container 
//             maxWidth="lg" 
//             sx={{
//                 textAlign: 'center',
//                 py: 5,
//                 backgroundColor: '#f4f4f4', // Neutral light gray for background
//                 borderRadius: 2,
//                 boxShadow: 3,
//                 position: 'relative',
//                 zIndex: 1,
//                 mt: 3, // Space between Navbar and Section
//                 mb: 3, // Space between Footer and Section
//             }}
//         >
//             {/* Title with animation */}
//             <motion.div
//                 initial={{ opacity: 0, y: -50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//             >
//                 <Typography variant="h2" component="h1" color="primary" gutterBottom sx={{ fontWeight: 'bold' }}>
//                     Parking System Management
//                 </Typography>
//             </motion.div>
            
//             {/* Subtitle with animation */}
//             <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, delay: 0.5 }}
//             >
//                 <Typography variant="h4" color="textSecondary" gutterBottom>
//                     Book your parking spots with ease
//                 </Typography>
//             </motion.div>

//             {/* Button with gentle hover animation */}
//             <Box mt={4}>
//                 <motion.div
//                     whileHover={{ opacity: 0.8 }}
//                     whileTap={{ scale: 0.98 }}
//                 >
//                     <Button 
//                         component={Link} 
//                         to="/CreateSlotList" 
//                         color="primary" 
//                         variant="contained"
//                         sx={{
//                             padding: '12px 24px', 
//                             fontSize: '1.2rem', 
//                             borderRadius: '50px', 
//                             backgroundColor: '#007bff', // Blue button color
//                             '&:hover': {
//                                 backgroundColor: '#0056b3', // Darker blue on hover
//                             },
//                             transition: 'background-color 0.3s ease, opacity 0.3s ease',
//                         }}
//                     >
//                         View Slots
//                     </Button>
//                 </motion.div>
//             </Box>

//             {/* Feature Section */}
//             <Grid container spacing={4} mt={6} justifyContent="center">
//                 <Grid item xs={12} sm={6} md={4}>
//                     <Box 
//                         sx={{
//                             background: '#c0c0d0', // Light gray background for the card
//                             borderRadius: 2, 
//                             boxShadow: 2, 
//                             padding: 3, 
//                             transition: 'transform 0.3s ease', 
//                             '&:hover': { transform: 'scale(1.05)' }
//                         }}
//                     >
//                         <Typography variant="h6" color="primary" gutterBottom>
//                             Fast & Easy
//                         </Typography>
//                         <Typography color="textSecondary">
//                             Find available parking spots in seconds. No more circling around for hours!
//                         </Typography>
//                     </Box>
//                 </Grid>
//                 <Grid item xs={12} sm={6} md={4}>
//                     <Box 
//                         sx={{
//                             background: '#c0c0d0', 
//                             borderRadius: 2, 
//                             boxShadow: 2, 
//                             padding: 3, 
//                             transition: 'transform 0.3s ease', 
//                             '&:hover': { transform: 'scale(1.05)' }
//                         }}
//                     >
//                         <Typography variant="h6" color="primary" gutterBottom>
//                             Secure Parking
//                         </Typography>
//                         <Typography color="textSecondary">
//                             Your parking spot is reserved, ensuring a safe and guaranteed space.
//                         </Typography>
//                     </Box>
//                 </Grid>
//                 <Grid item xs={12} sm={6} md={4}>
//                     <Box 
//                         sx={{
//                             background: '#c0c0d0', 
//                             borderRadius: 2, 
//                             boxShadow: 2, 
//                             padding: 3, 
//                             transition: 'transform 0.3s ease', 
//                             '&:hover': { transform: 'scale(1.05)' }
//                         }}
//                     >
//                         <Typography variant="h6" color="primary" gutterBottom>
//                             Easy Payment
//                         </Typography>
//                         <Typography color="textSecondary">
//                             Pay online through our secure gateway. Hassle-free and quick.
//                         </Typography>
//                     </Box>
//                 </Grid>
//             </Grid>
//         </Container>
//     );
// };

// export default Homepage;

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const Homepage = () => {
    return (
        <Container 
            maxWidth="lg" 
            sx={{
                textAlign: 'center',
                py: 5,
                backgroundColor: '#f6f0fa', // Soft lavender background
                borderRadius: 2,
                boxShadow: 3,
                position: 'relative',
                zIndex: 1,
                mt: 3, // Space between Navbar and Section
                mb: 3, // Space between Footer and Section
            }}
        >
            {/* Title Section with Animation */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Typography 
                    variant="h2" 
                    component="h1" 
                    color="primary" 
                    gutterBottom 
                    sx={{ fontWeight: 'bold' }}
                >
                    Parking System Management
                </Typography>
            </motion.div>
            
            {/* Subtitle Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <Typography variant="h5" color="textSecondary" gutterBottom>
                    Simplifying your parking experience, one spot at a time.
                </Typography>
            </motion.div>

            {/* Call-to-Action Button */}
            <Box mt={4}>
                <motion.div
                    whileHover={{ opacity: 0.9, scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Button 
                        component={Link} 
                        to="/CreateSlotList" 
                        variant="contained"
                        sx={{
                            padding: '12px 28px',
                            fontSize: '1.2rem',
                            borderRadius: '50px',
                            backgroundColor: '#ae86cf', // Primary light purple color
                            '&:hover': {
                                backgroundColor: '#cf9fff', // Secondary soft lilac color
                            },
                            transition: 'background-color 0.3s ease, transform 0.3s ease',
                        }}
                    >
                        View Available Slots
                    </Button>
                </motion.div>
            </Box>

            {/* Features Section */}
            <Grid container spacing={4} mt={6} justifyContent="center">
                {[
                    {
                        title: "Fast & Easy Booking",
                        description: "Locate and reserve parking spaces within seconds.",
                        icon: "🚗",
                    },
                    {
                        title: "Secure Parking",
                        description: "Your spot is guaranteed and reserved securely.",
                        icon: "🔒",
                    },
                    {
                        title: "Flexible Payments",
                        description: "Pay with confidence through our secure platform.",
                        icon: "💳",
                    },
                    {
                        title: "User Dashboard",
                        description: "Manage bookings, payment history, and more.",
                        icon: "📊",
                        link: "/dashboard",
                    },
                    {
                        title: "Customer Support",
                        description: "We're here to help 24/7 with any issues.",
                        icon: "📞",
                        link: "/support",
                    },
                ].map((feature, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Box 
                                sx={{
                                    background: '#e7dff1', // Card background
                                    borderRadius: 2, 
                                    boxShadow: 2, 
                                    padding: 3,
                                    textAlign: 'center',
                                    transition: 'transform 0.3s ease',
                                }}
                            >
                                <Typography 
                                    variant="h4" 
                                    sx={{ color: '#7f659b', fontSize: '2rem' }}
                                >
                                    {feature.icon}
                                </Typography>
                                <Typography 
                                    variant="h6" 
                                    color="primary" 
                                    gutterBottom
                                >
                                    {feature.title}
                                </Typography>
                                <Typography color="textSecondary">
                                    {feature.description}
                                </Typography>
                                {feature.link && (
                                    <Box mt={2}>
                                        <Button 
                                            component={Link} 
                                            to={feature.link} 
                                            variant="outlined" 
                                            color="primary"
                                            sx={{ 
                                                textTransform: 'none',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Learn More
                                        </Button>
                                    </Box>
                                )}
                            </Box>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>

            {/* Testimonial Section */}
            <Box mt={10}>
                <Typography variant="h4" color="primary" gutterBottom>
                    What Our Users Say
                </Typography>
                <Grid container spacing={4} mt={2} justifyContent="center">
                    {[
                        {
                            name: "John Doe",
                            review: "Amazing service! Finding parking has never been easier.",
                            rating: "⭐⭐⭐⭐⭐",
                        },
                        {
                            name: "Jane Smith",
                            review: "I love the secure booking process. Highly recommend!",
                            rating: "⭐⭐⭐⭐⭐",
                        },
                        {
                            name: "Alex Johnson",
                            review: "Flexible payments and great customer support.",
                            rating: "⭐⭐⭐⭐⭐",
                        },
                    ].map((testimonial, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box 
                                sx={{
                                    background: '#fef5ff', 
                                    borderRadius: 2,
                                    boxShadow: 1,
                                    padding: 3,
                                    textAlign: 'center',
                                    border: '1px solid #d9cceb',
                                }}
                            >
                                <Typography 
                                    variant="body1" 
                                    color="textPrimary" 
                                    gutterBottom
                                >
                                    "{testimonial.review}"
                                </Typography>
                                <Typography 
                                    variant="h6" 
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    {testimonial.name}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    sx={{ color: '#b7a4c8' }}
                                >
                                    {testimonial.rating}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Homepage;
