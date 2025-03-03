// // // src/components/Footer.js
// // import React from 'react';
// // import { Box, Typography } from '@mui/material';

// // const Footer = () => (
// //   <Box 
// //     component="footer" 
// //     sx={{
// //       position: 'relative', // Fixed position
// //       bottom: 0,
// //       bgcolor: 'background.paper',
// //       color: 'text.secondary',
// //       py: 4,
// //       width: '100%',
// //       textAlign: 'center',
// //       maxHeight:'100px',
// //       borderTop: `1px solid ${theme => theme.palette.primary.main}`, // Optional: add a top border
// //     }}
// //   >
// //     <Typography variant="h6" gutterBottom>
// //       Built with ❤️ smita
// //     </Typography>
// //     <Typography variant="body2" sx={{ mt: 2 }}>
// //       © {new Date().getFullYear()} SAMBITA SUNAYANA | All Rights Reserved
// //     </Typography>
// //   </Box>
// // );

// // export default Footer;  


// // src/components/Footer.js
// import React from "react";
// import { Box, Typography } from "@mui/material";

// const Footer = () => (
//   <Box
//     component="footer"
//     sx={{
//       position:"relative",
//       bgcolor: "#121417", // Dark background
//       color: "#c0c0d0", // Light text
//       py: 2,
//       textAlign: "center",
//       width: "100%",
//       borderTop: "1px solid #00ffcc", // Thin border at the top
//     }}
//   >
//     <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
//       Built with <span style={{ color: "red" }}>❤️</span> SMITA
//     </Typography>
//     <Typography variant="body2" sx={{ mt: 1, fontSize: "0.9rem" }}>
//       © {new Date().getFullYear()} Smita | All Rights Reserved
//     </Typography>
//   </Box>
// );

// export default Footer;


// src/components/Footer.js
import React from 'react';
import { Box, Typography, Grid, Divider, Link, Container } from '@mui/material';
import { GitHub, LinkedIn, Instagram, Facebook } from '@mui/icons-material';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      position:"relative",
      bottom: 0,
      bgcolor: 'background.paper',
      color: 'text.secondary',
      py: 4,
      width: '100%',
      textAlign: 'center',
      maxHeight: '100px',
      borderTop: (theme) => `1px solid ${theme.palette.primary.main}`,
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={4} justifyContent="center">
        {/* Contact Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" color="inherit" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" color="inherit">
            Email: support@parkingsystem.com
          </Typography>
          <Typography variant="body2" color="inherit">
            Phone: +1 234 567 890
          </Typography>
          <Typography variant="body2" color="inherit">
            Address: 5678 Parking Lane, City Center, 12345
          </Typography>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" color="inherit" gutterBottom>
            Follow Us
          </Typography>
          <Box display="flex" justifyContent="center" gap={2}>
            <Link
              component="a"
              href="https://github.com/alibha04"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'inherit',
                '&:hover': {
                  color: 'primary.light',
                },
              }}
            >
              <GitHub />
            </Link>
            <Link
              component="a"
              href="https://www.linkedin.com/in/alibha-pradhan-050210327/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'inherit',
                '&:hover': {
                  color: 'primary.light',
                },
              }}
            >
              <LinkedIn />
            </Link>
            <Link
              component="a"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'inherit',
                '&:hover': {
                  color: 'primary.light',
                },
              }}
            >
              <Instagram />
            </Link>
            <Link
              component="a"
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'inherit',
                '&:hover': {
                  color: 'primary.light',
                },
              }}
            >
              <Facebook />
            </Link>
          </Box>
        </Grid>

        {/* About Us */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" color="inherit" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2" color="inherit" mt={2}>
            <b>Our Mission:</b> To simplify parking management with innovative technology.
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, bgcolor: 'primary.light' }} />

      
      <Typography variant="body2" sx={{ mt: 2 }}>
        © {new Date().getFullYear()} PARKING SYSTEM | All Rights Reserved
      </Typography>
    </Container>
  </Box>
);

export default Footer;