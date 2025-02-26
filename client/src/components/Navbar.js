import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Button,
  Tooltip,

} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Navbar = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setMenuAnchorEl(event.currentTarget);


  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ width: '100%' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'primary.main' }}>
          Parking System
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            color="primary"
            component={RouterLink}
            to="/"
            startIcon={<HomeIcon />}
          >
          </Button>
          

          <IconButton
            color="primary"
            component="a"
            href="https://github.com/smita0t7/parking_system"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>

        
          <IconButton
            color="primary"
            component="a"
            href="https://docs.google.com/document/d/1Y2Uf9ZuDR1dejvmMc7R051KkvGgmoW7PBs8m8ernswc/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
          >
            <MenuBookIcon />
          </IconButton>


          <IconButton onClick={handleMenuOpen} color="inherit" position="left" >
                    <MenuIcon />
                </IconButton>
                <Menu
                    anchorEl={menuAnchorEl}
                    open={Boolean(menuAnchorEl)}
                    onClose={handleMenuClose}
                >
                    
                    <MenuItem component={RouterLink} to="/add-slot" onClick={handleMenuClose}>
                        Create Lot
                    </MenuItem>
                    <MenuItem component={RouterLink} to="/slots" onClick={handleMenuClose}>
                        Lot List
                    </MenuItem>
                    <MenuItem component={RouterLink} to="/search" onClick={handleMenuClose}>
                        Search Lot
                    </MenuItem>
                    <MenuItem component={RouterLink} to="/qrcodes" onClick={handleMenuClose}>
                        Download QR
                    </MenuItem>
                    <MenuItem component={RouterLink} to="/about" onClick={handleMenuClose}>
                        About
                    </MenuItem>
                </Menu>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;