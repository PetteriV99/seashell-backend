import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import logger from './utils/logger';

const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
})
.on('error', (error: Error) => logger.error(error));