import express  from 'express';
import { Application } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { MainRouter } from './routes/main';

const app: Application = express();

app.use(express.json());
app.use('api', MainRouter);

export default app;