// // src/theme/newFreshTheme.js
// import { createTheme } from '@mui/material/styles';

// const modernColors = {
//   base: '#f4f4f9',
//   surface: '#c0c0d0',
//   overlay: '#c0c0d0',
//   muted: '#9090a0',
//   subtle: '#606070',
//   text: '#303030',
//   primary: '#005f73',
//   secondary: '#0a9396',
//   error: '#ae2012',
//   warning: '#bb3e03',
//   info: '#3a86ff',
//   success: '#3d5a80',
//   highlight: '#edf2f4',
// };

// const newFreshTheme = createTheme({
//   palette: {
//     mode: 'light',
//     background: {
//       default: modernColors.base,
//       paper: modernColors.surface,
//     },
//     primary: {
//       main: modernColors.primary,
//     },
//     secondary: {
//       main: modernColors.secondary,
//     },
//     error: {
//       main: modernColors.error,
//     },
//     warning: {
//       main: modernColors.warning,
//     },
//     info: {
//       main: modernColors.info,
//     },
//     success: {
//       main: modernColors.success,
//     },
//     text: {
//       primary: modernColors.text,
//       secondary: modernColors.subtle,
//     },
//   },
//   typography: {
//     fontFamily: 'Nunito, Arial, sans-serif',
//     h1: {
//       fontFamily: 'Nunito, sans-serif',
//       fontWeight: 700,
//       fontSize: '2.5rem',
//     },
//     h2: {
//       fontFamily: 'Nunito, sans-serif',
//       fontWeight: 600,
//       fontSize: '2rem',
//     },
//     h3: {
//       fontFamily: 'Nunito, sans-serif',
//       fontWeight: 500,
//       fontSize: '1.75rem',
//     },
//     body1: {
//       fontFamily: 'Nunito, sans-serif',
//       fontSize: '1rem',
//     },
//     body2: {
//       fontFamily: 'Nunito, sans-serif',
//       fontSize: '0.875rem',
//     },
//   },
//   components: {
//     MuiAppBar: {
//       styleOverrides: {
//         root: {
//           backgroundColor: modernColors.overlay,
//           color: modernColors.text,
//           borderBottom: `3px solid ${modernColors.primary}`,
//         },
//       },
//     },
//     MuiFooter: {
//       styleOverrides: {
//         root: {
//           backgroundColor: modernColors.overlay,
//           color: modernColors.text,
//           borderTop: `3px solid ${modernColors.primary}`,
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           textTransform: 'uppercase',
//           fontWeight: 600,
//           borderRadius: '6px',
//           padding: '10px 18px',
//           backgroundColor: modernColors.primary,
//           color: '#ffffff',
//           '&:hover': {
//             backgroundColor: modernColors.secondary,
//           },
//         },
//       },
//     },
//     MuiCssBaseline: {
//       styleOverrides: `
//         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap');

//         body {
//           margin: 0;
//           padding: 0;
//           background-color: ${modernColors.base};
//           color: ${modernColors.text};
//           font-family: 'Nunito', sans-serif;
//           line-height: 1.8;
//         }
//       `,
//     },
//     MuiPaper: {
//       styleOverrides: {
//         root: {
//           padding: '24px',
//           borderRadius: '10px',
//           boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.15)',
//         },
//       },
//     },
//   },
// });

// export default newFreshTheme;


// src/theme/lightPurpleTheme.js
import { createTheme } from '@mui/material/styles';

const wowPurpleColors = {
  base: '#f6f0fa', // Soft lavender for the background
  surface: '#e7dff1', // Muted light purple for surfaces
  overlay: '#d9cceb', // Slightly deeper light purple for overlays
  muted: '#b7a4c8', // Subtle lavender-gray for muted tones
  subtle: '#7f659b', // Rich, dark purple-gray for subtler contrasts
  text: '#3d2e54', // Deep plum for primary text
  primary: '#ae86cf', // Light purple as the main theme color
  secondary: '#cf9fff', // Soft lilac for secondary elements
  error: '#a74a5a', // Warm muted red
  warning: '#d4a373', // Earthy amber for warnings
  info: '#8e88d4', // Dusty purple for info
  success: '#679d91', // Muted teal-green for success
  highlight: '#fef5ff', // Very light pinkish purple for highlights
};

const lightPurpleTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: wowPurpleColors.base,
      paper: wowPurpleColors.surface,
    },
    primary: {
      main: wowPurpleColors.primary,
    },
    secondary: {
      main: wowPurpleColors.secondary,
    },
    error: {
      main: wowPurpleColors.error,
    },
    warning: {
      main: wowPurpleColors.warning,
    },
    info: {
      main: wowPurpleColors.info,
    },
    success: {
      main: wowPurpleColors.success,
    },
    text: {
      primary: wowPurpleColors.text,
      secondary: wowPurpleColors.subtle,
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h1: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: wowPurpleColors.text,
    },
    h2: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      color: wowPurpleColors.text,
    },
    h3: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
      fontSize: '1.75rem',
    },
    body1: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '1rem',
    },
    body2: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '0.875rem',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: wowPurpleColors.overlay,
          color: wowPurpleColors.text,
          borderBottom: `3px solid ${wowPurpleColors.primary}`,
        },
      },
    },
    MuiFooter: {
      styleOverrides: {
        root: {
          backgroundColor: wowPurpleColors.overlay,
          color: wowPurpleColors.text,
          borderTop: `3px solid ${wowPurpleColors.primary}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          fontWeight: 600,
          borderRadius: '6px',
          padding: '10px 18px',
          backgroundColor: wowPurpleColors.primary,
          color: '#ffffff',
          '&:hover': {
            backgroundColor: wowPurpleColors.secondary,
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        body {
          margin: 0;
          padding: 0;
          background-color: ${wowPurpleColors.base};
          color: ${wowPurpleColors.text};
          font-family: 'Poppins', sans-serif;
          line-height: 1.8;
        }
      `,
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '24px',
          borderRadius: '10px',
          boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.15)',
        },
      },
    },
  },
});

export default lightPurpleTheme;
