// // src/components/Footer.js
// import React from 'react';
// import { Box, Typography } from '@mui/material';

// const Footer = () => (
//   <Box 
//     component="footer" 
//     sx={{
//       bgcolor: 'background.paper',
//       color: 'text.secondary',
//       py: 4,
//       width: '100%',
//       textAlign: 'center',
//       borderTop: `1px solid ${theme => theme.palette.primary.main}`, // Optional: add a top border
//     }}
//   >
//     <Typography variant="h6" gutterBottom>
//       Built with ❤️ by smita
//     </Typography>
//     <Typography variant="body2" sx={{ mt: 2 }}>
//       © {new Date().getFullYear()} Bsc Cohort | All Rights Reserved
//     </Typography>
//   </Box>
// );

// export default Footer;

import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      bgcolor: "primary.dark",
      color: "white",
      py: 2, // Reduced padding for a smaller height
      textAlign: "center",
    }}
  >
    <Typography variant="body2" gutterBottom>
      © {new Date().getFullYear()} Built with ❤️ by Smita
    </Typography>
    <Typography variant="body2">
      <Link href="#" underline="hover" color="inherit">
        Privacy Policy
      </Link>{" "}
      |{" "}
      <Link href="#" underline="hover" color="inherit">
        Terms of Service
      </Link>
    </Typography>
  </Box>
);

export default Footer;
