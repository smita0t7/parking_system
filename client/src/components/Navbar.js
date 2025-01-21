import React, { useState, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Menu,
    MenuItem,
    IconButton,
    Divider,
    useMediaQuery,
    useTheme,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [parkingAnchorEl, setParkingAnchorEl] = useState(null);
    const [vehicleAnchorEl, setVehicleAnchorEl] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Handlers for menus and drawer
    const handleOpenMenu = useCallback((setter) => (event) => setter(event.currentTarget), []);
    const handleCloseMenu = useCallback((setter) => () => setter(null), []);
    const toggleDrawer = useCallback((open) => () => setDrawerOpen(open), []);

    // Parking-related links
    const parkingLinks = [
        { label: 'View Parking Slots', to: '/parking-slots' },
        { label: 'Create Parking Slot', to: '/create-parking-slot' },
        { label: 'Search Parking Slots', to: '/search-parking-slots' },
    ];

    // Vehicle-related links
    const vehicleLinks = [
        { label: 'View Vehicles', to: '/vehicles' },
        { label: 'Register Vehicle', to: '/register-vehicle' },
    ];

    const renderMenuItems = useCallback((items, handleClose) =>
        items.map(({ label, to }) => (
            <MenuItem key={label} component={RouterLink} to={to} onClick={handleClose}>
                {label}
            </MenuItem>
        )), []);

    const mobileMenu = (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)} aria-label="Main Menu">
            <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                <List>
                    <ListItem button component={RouterLink} to="/" aria-label="Home">
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button onClick={handleOpenMenu(setParkingAnchorEl)} aria-label="Parking Slots Menu">
                        <ListItemIcon><LocalParkingIcon /></ListItemIcon>
                        <ListItemText primary="Parking Slots" />
                    </ListItem>
                    <Menu
                        anchorEl={parkingAnchorEl}
                        open={Boolean(parkingAnchorEl)}
                        onClose={handleCloseMenu(setParkingAnchorEl)}
                    >
                        {renderMenuItems(parkingLinks, handleCloseMenu(setParkingAnchorEl))}
                    </Menu>
                    <ListItem button onClick={handleOpenMenu(setVehicleAnchorEl)} aria-label="Vehicles Menu">
                        <ListItemIcon><DirectionsCarIcon /></ListItemIcon>
                        <ListItemText primary="Vehicles" />
                    </ListItem>
                    <Menu
                        anchorEl={vehicleAnchorEl}
                        open={Boolean(vehicleAnchorEl)}
                        onClose={handleCloseMenu(setVehicleAnchorEl)}
                    >
                        {renderMenuItems(vehicleLinks, handleCloseMenu(setVehicleAnchorEl))}
                    </Menu>
                </List>
            </Box>
        </Drawer>
    );

    return (
        <AppBar position="sticky" sx={{ bgcolor: 'primary.main' }}>
            <Toolbar>
                <Typography
                    variant="h6"
                    component={RouterLink}
                    to="/"
                    sx={{
                        flexGrow: 1,
                        textDecoration: 'none',
                        color: 'white',
                        fontWeight: 700,
                    }}
                    aria-label="Parking Management Home"
                >
                    Parking Management
                </Typography>
                {isMobile ? (
                    <>
                        <IconButton
                            color="inherit"
                            edge="start"
                            onClick={toggleDrawer(true)}
                            aria-label="Menu"
                            sx={{ ml: 1 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        {mobileMenu}
                    </>
                ) : (
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            color="inherit"
                            component={RouterLink}
                            to="/"
                            startIcon={<HomeIcon />}
                            sx={{ textTransform: 'none' }}
                            aria-label="Home"
                        >
                            Home
                        </Button>
                        <Button
                            color="inherit"
                            onClick={handleOpenMenu(setParkingAnchorEl)}
                            startIcon={<LocalParkingIcon />}
                            sx={{ textTransform: 'none' }}
                            aria-label="Parking Slots Menu"
                        >
                            Parking Slots
                        </Button>
                        <Menu
                            anchorEl={parkingAnchorEl}
                            open={Boolean(parkingAnchorEl)}
                            onClose={handleCloseMenu(setParkingAnchorEl)}
                        >
                            {renderMenuItems(parkingLinks, handleCloseMenu(setParkingAnchorEl))}
                        </Menu>
                        <Button
                            color="inherit"
                            onClick={handleOpenMenu(setVehicleAnchorEl)}
                            startIcon={<DirectionsCarIcon />}
                            sx={{ textTransform: 'none' }}
                            aria-label="Vehicles Menu"
                        >
                            Vehicles
                        </Button>
                        <Menu
                            anchorEl={vehicleAnchorEl}
                            open={Boolean(vehicleAnchorEl)}
                            onClose={handleCloseMenu(setVehicleAnchorEl)}
                        >
                            {renderMenuItems(vehicleLinks, handleCloseMenu(setVehicleAnchorEl))}
                        </Menu>
                    </Box>
                )}
            </Toolbar>
            <Divider />
        </AppBar>
    );
};

export default React.memo(Navbar);
