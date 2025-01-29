// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box 
    component="footer" 
    sx={{
      bottom: 0,
      bgcolor: 'background.paper',
      color: 'text.secondary',
      py: 4,
      width: '100%',
      textAlign: 'center',
      maxHeight:'100px',
      borderTop: `1px solid ${theme => theme.palette.primary.main}`, // Optional: add a top border
    }}
  >
    <Typography variant="h6" gutterBottom>
      Built with ❤️ SMITA
    </Typography>
    <Typography variant="body2" sx={{ mt: 2 }}>
      © {new Date().getFullYear()} Smita  | All Rights Reserved
    </Typography>
  </Box>
);

export default Footer;