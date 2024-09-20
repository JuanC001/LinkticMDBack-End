import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './Routes/User.js';
import authRoutes from './Routes/Auth.js';
import hotelRoutes from './Routes/Hotel.js';

import connectDB from './Database/config.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: process.env.FRONTEND_URI || '*',
    optionsSuccessStatus: 200,
};

connectDB();

app.use(cors(corsOptions));
app.use(express.static('public'));
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/hotel', hotelRoutes)

app.listen(port, () => {
    console.log(`Escuchando en http://localhost:${port}`);
});