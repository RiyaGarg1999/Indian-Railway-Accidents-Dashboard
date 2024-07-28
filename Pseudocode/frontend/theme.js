// Import Required Module
import { createTheme } from '@mui/material/styles';

// Define Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',          // Set palette mode to light
    primary: {
      main: '#ef8f1c',      // Define primary color
    },
    background: {
      default: '#ffffff',   // Set default background color
      paper: '#f7f7f7',     // Set paper background color
    },
  },
});

// Define Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',           // Set palette mode to dark
    primary: {
      main: '#3462eb',      // Define primary color
    },
    background: {
      default: '#121212',   // Set default background color
      paper: '#1d1d1d',     // Set paper background color
    },
  },
});

// Export Themes
export { lightTheme, darkTheme };
