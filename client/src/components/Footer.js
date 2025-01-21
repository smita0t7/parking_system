import React, { Suspense } from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';

// Lazy load icons to improve performance
const GitHubIcon = React.lazy(() => import('@mui/icons-material/GitHub'));
const LinkedInIcon = React.lazy(() => import('@mui/icons-material/LinkedIn'));
const MailOutlineIcon = React.lazy(() => import('@mui/icons-material/MailOutline'));

const Footer = React.memo(() => (
    <Box
        component="footer"
        sx={{
            py: 4,
            background: 'linear-gradient(45deg, #1e88e5, #c0c0d0)',
            color: 'white',
        }}
    >
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={4} textAlign="center">
                <Typography variant="h6" gutterBottom>
                    Parking Management System
                </Typography>
                <Typography variant="body2">© {new Date().getFullYear()} Smita</Typography>
            </Grid>
            <Grid item xs={12} sm={4} textAlign="center">
                <Typography variant="subtitle1">Effortlessly Manage Parking</Typography>
            </Grid>
            <Grid item xs={12} sm={4} textAlign="center">
                <Suspense fallback={<span>Loading...</span>}>
                    <IconButton
                        aria-label="GitHub Profile"
                        href="https://github.com/your-github-profile"
                        target="_blank"
                        color="inherit"
                    >
                        <GitHubIcon />
                    </IconButton>
                    <IconButton
                        aria-label="LinkedIn Profile"
                        href="https://www.linkedin.com/in/your-linkedin-profile/"
                        target="_blank"
                        color="inherit"
                    >
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton
                        aria-label="Send an Email"
                        href="mailto:your-email@example.com"
                        color="inherit"
                    >
                        <MailOutlineIcon />
                    </IconButton>
                </Suspense>
            </Grid>
        </Grid>
    </Box>
));

export default Footer;
