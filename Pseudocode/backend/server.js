// Import Required Modules
import express from "express";
import cors from "cors";
import { allData, railway, railwayType } from './database.js';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Express Application
const app = express();
app.use(cors());

// Set the Port
const PORT = process.env.PORT || 8800;

// Define Routes

// Route to fetch all data within a date range
app.get('/allData', async (req, res) => {
    try {
        const date1 = req.query.date1;
        const date2 = req.query.date2;
        const data = await allData(date1, date2);
        return res.json(data);
    } catch (err) {
        console.error("Error fetching table data:", err.message);
        res.status(500).send("Error fetching data");
    }
});

// Route to fetch railway data within a date range
app.get('/railway', async (req, res) => {
    try {
        const date1 = req.query.date1;
        const date2 = req.query.date2;
        const data = await railway(date1, date2);
        return res.json(data);
    } catch (err) {
        console.error("Error fetching railway data:", err.message);
        res.status(500).send("Error fetching data");
    }
});

// Route to fetch railway type data within a date range
app.get('/railway-type', async (req, res) => {
    try {
        const date1 = req.query.date1;
        const date2 = req.query.date2;
        const label = req.query.label;
        const data = await railwayType(label, date1, date2);
        return res.json(data);
    } catch (error) {
        console.error("Error fetching railway type data:", error.message);
        res.status(500).send("Error fetching data");
    }
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
