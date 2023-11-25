import app from './app';
import logger from './utils/logger';

app
  .listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  })
  .on('error', (error: Error) => logger.error(error));