import { createLogger, format, transports } from 'winston';

export default createLogger({
    level: 'info',
    transports: [
      new transports.Console({
        stderrLevels: ["info", "error"],
        format: format.combine(format.errors({stack: true}), format.prettyPrint()),
      }),
    ],
    exitOnError: false,
});