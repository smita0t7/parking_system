// src/components/Footer.js
import React from 'react';
import { Box, Typography, Grid, Divider, Link, Container } from '@mui/material';
import { GitHub, LinkedIn, Instagram, Facebook } from '@mui/icons-material';

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
              href="https://github.com/smita0t7"
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
              href="https://www.linkedin.com/in/smita-sarangi-564021327/"
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