// Import Required Modules
import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';

// Create Context
export const ThemeContext = createContext();

// ThemeContextProvider Component
const ThemeContextProvider = ({ children }) => {
  // Initialize State
  const [themeMode, setThemeMode] = useState('light');

  // Set Theme Mode from localStorage on Mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme') || 'light';
    setThemeMode(savedTheme);
  }, []);

  // Toggle Theme Function
  const toggleTheme = () => {
    const newTheme = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newTheme);
    localStorage.setItem('selectedTheme', newTheme);
  };

  // Determine Current Theme
  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  // Provide Context Values and Apply Theme
  return (
    <ThemeContext.Provider value={{ toggleTheme, themeMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Export
export default ThemeContextProvider;

