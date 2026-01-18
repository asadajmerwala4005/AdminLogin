import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// 1. Load env variables immediately
dotenv.config(); 

// 2. Now import your local files (must have .js)
import connectDb from './config/db.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ 
    origin: "http://localhost:5173", // Your React URL
    credentials: true 
}));

// Routes
app.use("/api/admin", adminRoutes);

// Database Connection
connectDb();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
