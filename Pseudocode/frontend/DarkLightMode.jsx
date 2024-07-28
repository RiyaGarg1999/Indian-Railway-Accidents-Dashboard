// Import Necessary Modules
import React, { useContext } from 'react';
import Sun from './Sun';
import Moon from './Moon';
import './DarkLightMode.css';
import { ThemeContext } from './ThemeContext';

// Define DarkLightMode Component
const DarkLightMode = () => {
    const { toggleTheme, themeMode } = useContext(ThemeContext); // Use ThemeContext

    // Return JSX
    return (
        <div className="dark_mode"> // Container div with class 'dark_mode'
            <input
                className='dark_mode_input' // Input element for theme toggle
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme} // Handle theme toggle
                checked={themeMode === 'dark'} // Check if themeMode is 'dark'
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'> // Label for the input
                <Sun className={`mode-icon sun-icon ${themeMode === 'light' ? 'visible' : 'hidden'}`} /> // Sun icon with conditional classes
                <Moon className={`mode-icon moon-icon ${themeMode === 'dark' ? 'visible' : 'hidden'}`} /> // Moon icon with conditional classes
                <span className="slider"></span> // Slider span
            </label>
        </div>
    );
}

// Export DarkLightMode Component
export default DarkLightMode;
