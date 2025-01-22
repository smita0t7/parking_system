import React, { useState, useEffect } from 'react'; // Regular imports at the top
import { Link } from 'react-router-dom';
import axios from 'axios'; // Keep axios import at the top
import BackgroundImage from '../assets/bg.jpg'; // Update path if necessary

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
        totalSlots: 0,
        availableSlots: 0,
        bookedSlots: 0,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch parking slot data from the API
        axios.get('/api/lots') // Update with your backend API endpoint
            .then((res) => {
                const slots = res.data;
                const totalSlots = slots.length;
                const availableSlots = slots.filter(slot => slot.isAvailable).length;
                const bookedSlots = totalSlots - availableSlots;

                setStats({ totalSlots, availableSlots, bookedSlots });
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching parking slot data:', err);
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
                        Welcome to Parking Management System
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                            color: '#f1f1f1',
                        }}
                    >
                        Efficiently manage your parking slots with ease
                    </Typography>
                </Box>

                {/* Stats Section */}
                <Grid container spacing={4} mb={6}>
                    {[ 
                        { icon: <BarChartIcon />, value: stats.totalSlots, label: 'Total Slots' },
                        { icon: <HomeIcon />, value: stats.availableSlots, label: 'Available Slots' },
                        { icon: <AddBusinessIcon />, value: stats.bookedSlots, label: 'Booked Slots' },
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
                        { to: '/parking-slot-list', label: 'View Slots', icon: <HomeIcon /> },
                        { to: '/create-parking-slot', label: 'Create Slot', icon: <AddBusinessIcon /> },
                        { to: '/export-parking-slot', label: 'Export Data', icon: <BarChartIcon /> },
                        { href: 'https://github.com/', label: 'GitHub', icon: <GitHubIcon /> },
                        { to: '/search-parking-slots', label: 'Search Slots', icon: <SearchIcon /> },
                        { to: '/qrcode', label: 'QR Codes', icon: <QrCodeIcon /> },
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
