import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// importer les routes utilsateur
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/api', userRoutes);

app.listen(PORT, () => console.log(`Le serveur écoute bien au port ${PORT}`));