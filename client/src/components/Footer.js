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
//       Built with ❤️ 
//     </Typography>
//     <Typography variant="body2" sx={{ mt: 2 }}>
//       © {new Date().getFullYear()} Smita Sriya | All Rights Reserved
//     </Typography>
//   </Box>
// );

// export default Footer;

import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        py: 4,
        width: '100%',
        textAlign: 'center',
        borderTop: `1px solid ${theme.palette.divider}`,
        position: 'relative',
      }}
    >
      {/* Main footer content */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Built with ❤️ by Smita Sriya
      </Typography>
      
      <Typography variant="body2" sx={{ mt: 1, color: theme.palette.text.secondary }}>
        © {new Date().getFullYear()} | All Rights Reserved
      </Typography>

      {/* Social media links */}
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton
          color="primary"
          component="a"
          href="https://github.com/smita0t7"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            '&:hover': { color: theme.palette.secondary.main },
          }}
        >
          <GitHub />
        </IconButton>
        <IconButton
          color="primary"
          component="a"
          href="https://www.linkedin.com/in/smita-sriya/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            '&:hover': { color: theme.palette.secondary.main },
          }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          color="primary"
          component="a"
          href="https://twitter.com/smita_sriya"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            '&:hover': { color: theme.palette.secondary.main },
          }}
        >
          <Twitter />
        </IconButton>
      </Box>

      {/* Background animation effect (optional) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
          opacity: 0.1,
          zIndex: -1,
        }}
      />
    </Box>
  );
};

export default Footer;
