// Import Required Modules
import React, { useState } from 'react';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from 'dayjs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryType from './CategoryType';
import TableData from './TableData';
import RailwayType from './RailwayType';
import Railway from './Railway';

// Define `Dashboard` Component
export default function Dashboard() {
  // Initialize State Variables
  const [from, setFrom] = useState(dayjs('01-01-2006')); 
  const [to, setTo] = useState(dayjs(new Date()));

  // Define Functions to Handle Date Changes
  const handleFromChange = (date) => {
    setFrom(date);
  };

  const handleToChange = (date) => {
    setTo(date);
  };

  // Render Component
  return (
    <Router>
      <Routes>
        {/* Define Routes */}
        <Route path="/accident-category/:label/:from/:to" element={<CategoryType />} />
        <Route path="/railway/:label/:from/:to" element={<RailwayType />} />
        <Route path="/" element={
          <>
            
            {/* Container for Date Pickers */}
            <div className="container-grid-dates">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* From DatePicker */}
                <div id="date1">
                  <DatePicker
                    id='date1'
                    label="From"
                    format="DD-MM-YYYY"
                    value={from}
                    onChange={(date) => handleFromChange(date)}
                    orientation="landscape"
                    minDate={dayjs('01-01-2006')}
                    maxDate={to}
                    views={['year', 'month', 'day']}
                    slotProps={{
                      textField: {
                        helperText: 'DD-MM-YYYY',
                        variant: 'outlined',
                      },
                    }}
                  />
                </div>
                {/* To DatePicker */}
                <div id="date2">
                  <DatePicker
                    label="To"
                    format="DD-MM-YYYY"
                    value={to}
                    onChange={(date) => handleToChange(date)}
                    orientation="landscape"
                    minDate={from}
                    maxDate={dayjs(new Date())}
                    views={['year', 'month', 'day']}
                    slotProps={{
                      textField: {
                        helperText: 'DD-MM-YYYY',
                        variant: 'outlined',
                      },
                    }}
                  />
                </div>
              </LocalizationProvider>
              {/* Heading */}
              <div id='heading'>
                <h1>Indian Railway - Accident Cases</h1>
              </div>
            </div>
            
            {/* Container for Graphs */}
            <div className="container-grid-graphs">
              <div id="bar1">
                <Railway from={from} to={to} />
              </div>
            </div>
            
            {/* Container for Table */}
            <div className="container-flex-table">
              <TableData from={from} to={to} />
            </div>
            
          </>
        }/>
      </Routes>
    </Router>
  );
}
