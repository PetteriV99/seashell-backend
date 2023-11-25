import app from './app';
import logger from './utils/logger';

app
  .listen(process.env.PORT, () => {
    logger.info(`Server running on port ${process.env.PORT}`);
  })
  .on('error', (error: Error) => logger.error(error));