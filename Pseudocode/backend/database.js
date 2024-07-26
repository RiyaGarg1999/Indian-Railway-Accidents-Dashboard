// Import Required Modules
import oracledb from "oracledb";
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
import dotenv from 'dotenv';
dotenv.config();

// Initialize Connection Pool
let pool;
async function initPool() {
    const config = {
        user: process.env.USER,
        password: process.env.PASSWORD,
        connectString: process.env.CONNECT_STRING,
        poolIncrement: 0,
        poolMax: 4,
        poolMin: 4,
    };
    try {
        pool = await oracledb.createPool(config);
        console.log("Connection pool created successfully");
    } catch (err) {
        console.error("Error creating connection pool", err.message);
    }
}

// Create Database Connection
async function createConnection() {
    if (!pool) {
        await initPool();
    }
    try {
        let connection = await oracledb.getConnection();
        console.log("Connection successful");
        return connection;
    } catch (error) {
        console.error("Connection failed:", error.message);
    }
}

// Fetch All Data within Date Range
export async function allData(date1, date2) {
    let conn;
    try {
        conn = await createConnection();
        const query = `SQL QUERY HERE`;
        const binds = [date1, date2];
        const data = await conn.execute(query, binds);
        return data.rows;
    } catch (err) {
        console.error(err);
    } finally {
        if (conn) await conn.close();
        console.log("Connection closed");
    }
}

// Fetch Railway Data Grouped by Railway within Date Range
// Fetching no. of accidents in each railway zone
export async function railway(date1, date2) {
    let conn;
    try {
        conn = await createConnection();
        const query = `SQL QUERY HERE`;
        const binds = [date1, date2];
        const data = await conn.execute(query, binds);
        return data.rows;
    } catch (err) {
        console.error(err);
    } finally {
        if (conn) await conn.close();
        console.log("Connection closed");
    }
}

// Fetch Railway Type Data within Date Range
export async function railwayType(label, date1, date2) {
    let conn;
    try {
        conn = await createConnection();
        const query = `SQL QUERY HERE`;
        const binds = { label, date1, date2 };
        const data = await conn.execute(query, binds);
        return data.rows;
    } catch (err) {
        console.error(err);
    } finally {
        if (conn) await conn.close();
        console.log("Connection closed");
    }
}
