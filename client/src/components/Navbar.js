// import React, { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Box,
//   Menu,
//   MenuItem,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import HomeIcon from '@mui/icons-material/Home';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
// import Brightness4Icon from '@mui/icons-material/Brightness4'; // Dark mode icon
// import Brightness7Icon from '@mui/icons-material/Brightness7'; // Light mode icon

// const Navbar = ({ mode, toggleTheme }) => {  // Receive props
//   const [menuAnchorEl, setMenuAnchorEl] = useState(null);

//   const handleMenuOpen = (event) => setMenuAnchorEl(event.currentTarget);
//   const handleMenuClose = () => setMenuAnchorEl(null);

//   return (
//     <AppBar position="static" color="transparent" elevation={0} sx={{ width: '100%' }}>
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'primary.main' }}>
//           Parking System
//         </Typography>
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//           <IconButton color="primary" component={RouterLink} to="/">
//             <HomeIcon />
//           </IconButton>

//           <IconButton color="primary" component="a" href="https://github.com/smita0t7/parking_system" target="_blank" rel="noopener noreferrer">
//             <GitHubIcon />
//           </IconButton>

//           <IconButton color="primary" component="a" href="https://docs.google.com/document/d/1Y2Uf9ZuDR1dejvmMc7R051KkvGgmoW7PBs8m8ernswc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
//             <MenuBookIcon />
//           </IconButton>

//           {/* Theme Toggle Button */}
//           <IconButton onClick={toggleTheme} color="primary">
//             {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
//           </IconButton>

//           <IconButton onClick={handleMenuOpen} color="inherit">
//             <MenuIcon />
//           </IconButton>
//           <Menu anchorEl={menuAnchorEl} open={Boolean(menuAnchorEl)} onClose={handleMenuClose}>
//             <MenuItem component={RouterLink} to="/add-slot" onClick={handleMenuClose}>
//               Create Lot
//             </MenuItem>
//             <MenuItem component={RouterLink} to="/slots" onClick={handleMenuClose}>
//               Lot List
//             </MenuItem>
//             <MenuItem component={RouterLink} to="/search" onClick={handleMenuClose}>
//               Search Lot
//             </MenuItem>
//             <MenuItem component={RouterLink} to="/qrcodes" onClick={handleMenuClose}>
//               Download QR
//             </MenuItem>
//             <MenuItem component={RouterLink} to="/about" onClick={handleMenuClose}>
//               About
//             </MenuItem>
//           </Menu>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Dark mode icon
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Light mode icon

const Navbar = ({ mode, toggleTheme }) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const handleMenuOpen = (event) => setMenuAnchorEl(event.currentTarget);
  const handleMenuClose = () => setMenuAnchorEl(null);

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ width: '100%' }}>
      <Toolbar>
        {/* Clickable "Parking System" text (acts as a back button) */}
        <Typography
          variant="h6"
          component="div"
          onClick={() => navigate(-1)} // Navigates to the previous page
          sx={{
            flexGrow: 1,
            color: 'primary.main',
            fontWeight: 'bold',
            cursor: 'pointer', // Makes it look clickable
            "&:hover": { textDecoration: "underline" }, // Adds hover effect
          }}
        >
          Parking System
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton color="primary" component={RouterLink} to="/">
            <HomeIcon />
          </IconButton>

          <IconButton color="primary" component="a" href="https://github.com/smita0t7/parking_system" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </IconButton>

          <IconButton color="primary" component="a" href="https://docs.google.com/document/d/1Y2Uf9ZuDR1dejvmMc7R051KkvGgmoW7PBs8m8ernswc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            <MenuBookIcon />
          </IconButton>

          {/* Theme Toggle Button */}
          <IconButton onClick={toggleTheme} color="primary">
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          <IconButton onClick={handleMenuOpen} color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={menuAnchorEl} open={Boolean(menuAnchorEl)} onClose={handleMenuClose}>
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
