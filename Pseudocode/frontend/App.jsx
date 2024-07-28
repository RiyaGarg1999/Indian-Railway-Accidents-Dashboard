// Import Required Modules
import './App.css';
import './media-queries.css';
import Dashboard from './Dashboard';  // Renamed from Dates.jsx
import DarkLightMode from './DarkLightMode';
import { CssBaseline } from '@mui/material';

// Define App Component
function App() {
  return (
    <>
      <CssBaseline />  // Reset default browser styles
      <DarkLightMode />  // Dark/light mode functionality
      <div className='app'>            
        <Dashboard />  // Render the main dashboard content     
      </div>
    </>
  );
}

// Export `App` Component
export default App;
