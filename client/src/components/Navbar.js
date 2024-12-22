// import React, { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Menu,
//   MenuItem,
// } from '@mui/material';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import HomeIcon from '@mui/icons-material/Home';
// import MenuBookIcon from '@mui/icons-material/MenuBook'; // Added Notes icon

// const notesPages = [
//   { title: 'Home', path: '/notes/home' },
//   { title: 'Schedule', path: '/notes/schedule' },
// ];

// const Navbar = () => {
//   const [notesAnchorEl, setNotesAnchorEl] = useState(null);

//   const handleNotesClick = (event) => {
//     setNotesAnchorEl(event.currentTarget);
//   };

//   const handleNotesClose = () => {
//     setNotesAnchorEl(null);
//   };

//   return (
//     <AppBar position="static" color="transparent" elevation={0} sx={{ width: '100%' }}>
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'primary.main' }}>
//          Parking System
//         </Typography>
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//           <Button
//             color="primary"
//             component={RouterLink}
//             to="/"
//             startIcon={<HomeIcon />}
//           >
//             Home
//           </Button>
//           <Button
//             color="primary"
//             onClick={handleNotesClick}
//             startIcon={<MenuBookIcon />} // Added icon here
//           >
//             Notes
//           </Button>
//           <Menu
//             anchorEl={notesAnchorEl}
//             open={Boolean(notesAnchorEl)}
//             onClose={handleNotesClose}
//           >
//             {notesPages.map((page) => (
//               <MenuItem 
//                 key={page.path} 
//                 component={RouterLink} 
//                 to={page.path}
//                 onClick={handleNotesClose}
//               >
//                 {page.title}
//               </MenuItem>
//             ))}
//           </Menu>
//           <IconButton
//             color="primary"
//             component="a"
//             href="https://github.com/smita0t7/parking_system"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="GitHub"
//           >
//             <GitHubIcon />
//           </IconButton>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Menu,
//   MenuItem,
//   useMediaQuery,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
// } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import MenuIcon from '@mui/icons-material/Menu';
// import HomeIcon from '@mui/icons-material/Home';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
// import { motion } from 'framer-motion';

// const notesPages = [
//   { title: 'Home', path: '/notes/home' },
//   { title: 'Schedule', path: '/notes/schedule' },
// ];

// const Navbar = () => {
//   const [notesAnchorEl, setNotesAnchorEl] = useState(null);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   const handleNotesClick = (event) => {
//     setNotesAnchorEl(event.currentTarget);
//   };

//   const handleNotesClose = () => {
//     setNotesAnchorEl(null);
//   };

//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };

//   return (
//     <AppBar
//       position="sticky"
//       sx={{
//         background: 'rgba(255, 255, 255, 0.15)', // Frosted glass effect
//         backdropFilter: 'blur(10px)',
//         boxShadow: 'none',
//         color: '#fff',
//       }}
//     >
//       <Toolbar>
//         {/* Logo/Title */}
//         <Typography
//           variant="h5"
//           component={RouterLink}
//           to="/"
//           sx={{
//             flexGrow: 1,
//             textDecoration: 'none',
//             fontWeight: 'bold',
//             color: 'AE86CF',
//             letterSpacing: '2px',
//             '&:hover': {
//               color: theme.palette.secondary.light,
//             },
//           }}
//         >
//           Parking System
//         </Typography>

//         {/* Desktop Navigation */}
//         {!isMobile ? (
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
//             <motion.div whileHover={{ scale: 1.1 }}>
//               <Button
//                 component={RouterLink}
//                 to="/"
//                 sx={{
//                   fontWeight: '600',
//                   textTransform: 'capitalize',
//                   position: 'relative',
//                   color: '#fff',
//                   '&:after': {
//                     content: '""',
//                     position: 'absolute',
//                     width: 0,
//                     height: '3px',
//                     bottom: '-4px',
//                     left: 0,
//                     backgroundColor: '#fff',
//                     transition: 'width 0.3s',
//                   },
//                   '&:hover:after': {
//                     width: '100%',
//                   },
//                 }}
//                 startIcon={<HomeIcon />}
//               >
//                 Home
//               </Button>
//             </motion.div>

//             <motion.div whileHover={{ scale: 1.1 }}>
//               <Button
//                 onClick={handleNotesClick}
//                 sx={{
//                   fontWeight: '600',
//                   textTransform: 'capitalize',
//                   position: 'relative',
//                   color: '#fff',
//                   '&:after': {
//                     content: '""',
//                     position: 'absolute',
//                     width: 0,
//                     height: '3px',
//                     bottom: '-4px',
//                     left: 0,
//                     backgroundColor: '#fff',
//                     transition: 'width 0.3s',
//                   },
//                   '&:hover:after': {
//                     width: '100%',
//                   },
//                 }}
//                 startIcon={<MenuBookIcon />}
//               >
//                 Notes
//               </Button>
//             </motion.div>

//             <Menu
//               anchorEl={notesAnchorEl}
//               open={Boolean(notesAnchorEl)}
//               onClose={handleNotesClose}
//             >
//               {notesPages.map((page) => (
//                 <MenuItem
//                   key={page.path}
//                   component={RouterLink}
//                   to={page.path}
//                   onClick={handleNotesClose}
//                   sx={{
//                     '&:hover': {
//                       backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                     },
//                   }}
//                 >
//                   {page.title}
//                 </MenuItem>
//               ))}
//             </Menu>

//             <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
//               <IconButton
//                 component="a"
//                 href="https://github.com/smita0t7/parking_system"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 sx={{
//                   color: '#fff',
//                   backgroundColor: 'rgba(255, 255, 255, 0.2)',
//                   borderRadius: '50%',
//                   padding: '8px',
//                   '&:hover': {
//                     backgroundColor: 'rgba(255, 255, 255, 0.4)',
//                   },
//                 }}
//               >
//                 <GitHubIcon />
//               </IconButton>
//             </motion.div>
//           </Box>
//         ) : (
//           // Mobile Navigation: Hamburger Menu
//           <IconButton
//             edge="end"
//             color="inherit"
//             onClick={toggleDrawer(true)}
//             sx={{
//               color: '#fff',
//               '&:hover': {
//                 color: theme.palette.secondary.light,
//               },
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//         )}
//       </Toolbar>

//       {/* Mobile Drawer */}
//       <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
//         <Box
//           sx={{
//             width: 250,
//             height: '100%',
//             background: 'rgba(255, 255, 255, 0.9)',
//             backdropFilter: 'blur(10px)',
//             color: '#333',
//           }}
//           role="presentation"
//           onClick={toggleDrawer(false)}
//           onKeyDown={toggleDrawer(false)}
//         >
//           <List>
//             <ListItem
//               button
//               component={RouterLink}
//               to="/"
//               sx={{
//                 '&:hover': {
//                   backgroundColor: 'rgba(0, 0, 0, 0.1)',
//                 },
//               }}
//             >
//               <HomeIcon sx={{ marginRight: 2, color: '#6a11cb' }} />
//               <ListItemText primary="Home" />
//             </ListItem>
//             {notesPages.map((page) => (
//               <ListItem
//                 key={page.path}
//                 button
//                 component={RouterLink}
//                 to={page.path}
//                 sx={{
//                   '&:hover': {
//                     backgroundColor: 'rgba(0, 0, 0, 0.1)',
//                   },
//                 }}
//               >
//                 <MenuBookIcon sx={{ marginRight: 2, color: '#6a11cb' }} />
//                 <ListItemText primary={page.title} />
//               </ListItem>
//             ))}
//             <ListItem
//               button
//               component="a"
//               href="https://github.com/smita0t7/parking_system"
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={{
//                 '&:hover': {
//                   backgroundColor: 'rgba(0, 0, 0, 0.1)',
//                 },
//               }}
//             >
//               <GitHubIcon sx={{ marginRight: 2, color: '#6a11cb' }} />
//               <ListItemText primary="GitHub" />
//             </ListItem>
//           </List>
//         </Box>
//       </Drawer>
//     </AppBar>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { motion } from 'framer-motion';

const notesPages = [
  { title: 'Home', path: '/notes/home' },
  { title: 'Schedule', path: '/notes/schedule' },
];

const Navbar = () => {
  const [notesAnchorEl, setNotesAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleNotesClick = (event) => {
    setNotesAnchorEl(event.currentTarget);
  };

  const handleNotesClose = () => {
    setNotesAnchorEl(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'rgba(255, 255, 255, 0.15)', // Frosted glass effect
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
        color: '#fff',
      }}
    >
      <Toolbar>
        {/* Logo/Title */}
        <Typography
          variant="h5"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            fontWeight: 'bold',
            color: '#AE86CF',  // Set to light purple color
            letterSpacing: '2px',
            '&:hover': {
              color: theme.palette.secondary.light,
            },
          }}
        >
          Parking System
        </Typography>

        {/* Desktop Navigation */}
        {!isMobile ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button
                component={RouterLink}
                to="/"
                sx={{
                  fontWeight: '600',
                  textTransform: 'capitalize',
                  position: 'relative',
                  color: '#fff',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    width: 0,
                    height: '3px',
                    bottom: '-4px',
                    left: 0,
                    backgroundColor: '#fff',
                    transition: 'width 0.3s',
                  },
                  '&:hover:after': {
                    width: '100%',
                  },
                }}
                startIcon={<HomeIcon />}
              >
                Home
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
              <Button
                onClick={handleNotesClick}
                sx={{
                  fontWeight: '600',
                  textTransform: 'capitalize',
                  position: 'relative',
                  color: '#fff',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    width: 0,
                    height: '3px',
                    bottom: '-4px',
                    left: 0,
                    backgroundColor: '#fff',
                    transition: 'width 0.3s',
                  },
                  '&:hover:after': {
                    width: '100%',
                  },
                }}
                startIcon={<MenuBookIcon />}
              >
                Notes
              </Button>
            </motion.div>

            <Menu
              anchorEl={notesAnchorEl}
              open={Boolean(notesAnchorEl)}
              onClose={handleNotesClose}
            >
              {notesPages.map((page) => (
                <MenuItem
                  key={page.path}
                  component={RouterLink}
                  to={page.path}
                  onClick={handleNotesClose}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {page.title}
                </MenuItem>
              ))}
            </Menu>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                component="a"
                href="https://github.com/smita0t7/parking_system"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#fff',  // Set icon color to white
                  backgroundColor: '#FF5722',  // Set visible color (bright orange)
                  borderRadius: '50%',
                  padding: '8px',
                  '&:hover': {
                    backgroundColor: '#FF7043',  // Hover color for a subtle effect
                  },
                }}
              >
                <GitHubIcon />
              </IconButton>
            </motion.div>
          </Box>
        ) : (
          // Mobile Navigation: Hamburger Menu
          <IconButton
            edge="end"
            color="inherit"
            onClick={toggleDrawer(true)}
            sx={{
              color: '#fff',
              '&:hover': {
                color: theme.palette.secondary.light,
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            height: '100%',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            color: '#333',
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem
              button
              component={RouterLink}
              to="/"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <HomeIcon sx={{ marginRight: 2, color: '#6a11cb' }} />
              <ListItemText primary="Home" />
            </ListItem>
            {notesPages.map((page) => (
              <ListItem
                key={page.path}
                button
                component={RouterLink}
                to={page.path}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <MenuBookIcon sx={{ marginRight: 2, color: '#6a11cb' }} />
                <ListItemText primary={page.title} />
              </ListItem>
            ))}
            <ListItem
              button
              component="a"
              href="https://github.com/smita0t7/parking_system"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <GitHubIcon sx={{ marginRight: 2, color: '#6a11cb' }} />
              <ListItemText primary="GitHub" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
