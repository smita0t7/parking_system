// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box 
    component="footer" 
    sx={{
      position: 'relative', // Ensures no overlap
      bgcolor: 'background.paper',
      color: 'text.secondary',
      py: 3,
      width: '100%',
      textAlign: 'center',
      borderTop: theme => `1px solid ${theme.palette.primary.main}`,
      mt: 'auto', // Pushes footer to the bottom when content is less
    }}
  >
    <Typography variant="h6" gutterBottom>
      Built with ❤️ SMITA
    </Typography>
    <Typography variant="body2" sx={{ mt: 2 }}>
      © {new Date().getFullYear()} Smita | All Rights Reserved
    </Typography>
  </Box>
);

export default Footer;
