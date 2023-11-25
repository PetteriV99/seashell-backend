import { Client } from 'pg';

import dotenv from 'dotenv';
import logger from './utils/logger';
dotenv.config();

const client: Client = new Client({
  user: '',
  host: '',
  database: '',
  password: '',
  port: 2222,
});

client.connect((err: Error) => {
  if (err) {
    logger.error('connection error', err.stack);
  } else {
    logger.info('connected');
  }
});
