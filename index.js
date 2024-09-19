import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './Database/config';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: process.env.FRONTEND_URI || '*',
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.static('public'));
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Escuchando en http://localhost:${port}`);
});