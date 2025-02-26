// src/components/About.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const About = () => {
  const documentationLink = "https://docs.google.com/document/d/1wBTX5_SLsLLlN16lWjcaX_t1blvvFtnYX4KdWq0fDUc/edit?usp=sharing"; // Replace with your actual link

  return (
    <Box sx={{ maxWidth: "800px", margin: "auto", textAlign: "center", padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        About Parking System Management
      </Typography>
      <Typography variant="body1" paragraph>
        This project is a Parking System Management application that helps users find, book, and manage parking slots efficiently. 
        The system is designed using the MERN stack (MongoDB, Express, React, and Node.js) and provides a seamless user experience.
      </Typography>
      <Typography variant="body1" paragraph>
        For a detailed overview, you can read the full documentation below.
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        href={documentationLink} 
        target="_blank" 
        rel="noopener noreferrer"
        sx={{ mt: 2 }}
      >
        View Documentation
      </Button>
    </Box>
  );
};

export default About;
