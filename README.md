# Indian Railway Accidents Dashboard  
## Overview  
The Indian Railway Accidents Dashboard is a comprehensive tool designed to analyze and visualize data on railway accidents in India. The dashboard aims to enhance decision-making and improve user experience by providing interactive charts and real-time updates. This project is part of my training work at the Centre for Railway Information Systems (CRIS).

## Table of Contents  
[Introduction](#introduction)  
[Features](#features)    
[Technology Stack](#technology-stack)  
[Project Report](#project-report)  
[API Endpoints](#api-endpoints)  
[Modules](#modules)  
[Future Enhancements](#future-enhancements)  

## Introduction  
The dashboard utilizes various charts to present data in a visually appealing and comprehensible manner. Users can dynamically view data based on selected date ranges, helping identify trends and high-risk areas across different railway zones, divisions, accident categories, and more.  

## Features  
Interactive Charts: Doughnut, Line, Bar, and Pie charts for different accident categories.  
Real-time Updates: Dynamic data updates based on user-selected date ranges.  
Intuitive Design: User-friendly interface built with Material-UI and React.js.  

## Technology Stack  
Frontend  
React.js  
Material-UI  
Chart.js  
Backend  
Node.js  
Express.js  
Database  
OracleDB (chosen because it is used at CRIS company)    

## Project Report  
The repository includes a detailed project report that outlines the objectives, methodology, technology stack, implementation details, and future enhancements for the Indian Railway Accidents Dashboard project.   

## API Endpoints    
/ : Fetch all railway accident data.  
/railway : Fetch accident data by railway zones.  
/division : Fetch accidents data by divisions.  
/location : Fetch accident data by location.  
/category : Fetch accident data by category.  
/code : Fetch accident data by code.  
/type : Fetch accident data by type.  
/rk : Fetch accident data by rail user killed (RK).  
/rg : Fetch accident data by rail user grievous injured (RG).  
/rs : Fetch accident data by rail user simple injured (RS).  

## Modules  
* Railway  
Displays accidents by railway zone using bar or pie charts.  
* Division  
Shows accidents by division using station codes.  
* Location
Displays accidents by specific locations such as yard, mid-section, and stations using pie or bar charts.
* Category
Categorizes accidents into types like consequential, unusual, yard accidents, etc., to understand the nature and severity of accidents.
* Code
Displays accidents based on specific accident codes for detailed analysis.
* Type
Categorizes accidents by type, such as derailment, casualty, breach of block rules, fire, collision, etc., to understand common causes and types of accidents.

## Future Enhancements
Expanded Data Sources: Include multiple tables for deeper insights.
Advanced-Data Modeling: Implement SQL joins for comprehensive metrics.
Visualization Improvements: Expand dashboard capabilities for additional data visualizations.
