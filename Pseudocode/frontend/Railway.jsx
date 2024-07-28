// Import Required Modules
import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { ThemeContext } from './ThemeContext';
import colorPalette from './colorPalette';
import { Grid, Box } from '@mui/material';

// Register Chart Components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

// Define Railway Component
export default function Railway({ from, to }) {
    // Initialize State Variables
    const date1 = from.format('DD-MM-YYYY');
    const date2 = to.format('DD-MM-YYYY');
    const [data, setData] = useState([]);
    const { themeMode } = useContext(ThemeContext);
    const navigate = useNavigate();
    const chartRef = useRef();

    // Fetch Data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`http://localhost:8800/railway?date1=${date1}&date2=${date2}`);
                setData(result.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [date1, date2]);

    // Prepare Dataset
    const dataset = {
        labels: data.length > 0 && data.map(item => item.RAILWAY),
        datasets: [{
            label: 'No. of Accidents',
            data: data.length > 0 && data.map(item => item.COUNT),
            backgroundColor: ["rgba(54,162,235,0.9)"],
            hoverOffset: 4
        }]
    };

    // Get Chart Options
    const getOptions = () => {
        const isMediumScreen = window.innerWidth < 810;
        const isSmallScreen = window.innerWidth < 479;
        return {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                datalabels: {
                    display: !isSmallScreen,
                    color: themeMode === 'dark' ? colorPalette.dark.datalabel : colorPalette.light.datalabel,
                    anchor: 'end',
                    align: 'end',
                    offset: isMediumScreen ? 10 : 8,
                    formatter: (value, context) => {
                        const total = context.chart.data.datasets[0].data.reduce((acc, val) => acc + val, 0);
                        const percentage = Math.round((value / total) * 100);
                        return `${percentage}%`;
                    },
                    font: { size: 11 }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        color: themeMode === 'dark' ? colorPalette.dark.label : colorPalette.light.label,
                        font: { size: isMediumScreen ? 14 : 13 },
                        padding: isMediumScreen ? 20 : 18,
                        boxWidth: isMediumScreen ? 20 : 15,
                    }
                },
                title: {
                    display: true,
                    text: "RAILWAY WISE ACCIDENTS",
                    color: themeMode === 'dark' ? colorPalette.dark.title : colorPalette.light.title,
                    font: { size: isMediumScreen ? 22 : 20 },
                    padding: { top: isMediumScreen ? 30 : 10, bottom: 40 },
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: themeMode === 'dark' ? colorPalette.dark.xyAxisTicks : colorPalette.light.xyAxisTicks,
                        font: { size: isMediumScreen ? 12 : 14 },
                    },
                    grid: {
                        color: themeMode === 'dark' ? colorPalette.dark.xyAxisGrid : colorPalette.light.xyAxisGrid,
                    },
                },
                y: {
                    ticks: {
                        color: themeMode === 'dark' ? colorPalette.dark.xyAxisTicks : colorPalette.light.xyAxisTicks,
                        font: { size: isMediumScreen ? 12 : 14 },
                    },
                    grid: {
                        color: themeMode === 'dark' ? colorPalette.dark.xyAxisGrid : colorPalette.light.xyAxisGrid,
                    },
                },
            }
        };
    };

    // Handle Click Event
    const onClick = (event) => {
        const elements = getElementsAtEvent(chartRef.current, event);
        if (elements.length > 0) {
            const dataPointIndex = elements[0].index;
            const label = chartRef.current.data.labels[dataPointIndex];
            navigate(`/railway/${label}/${date1}/${date2}`, { replace: false });
        }
    };

    // Render Component
    return (
        <div className='chart'>
            <Bar
                options={getOptions()}
                data={dataset}
                onClick={onClick}
                ref={chartRef}
            />
        </div>
    );
}
