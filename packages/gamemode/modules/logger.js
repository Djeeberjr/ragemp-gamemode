const winston = require("winston");
const { combine, timestamp, printf } = winston.format;

const myFormat = printf(({ level, message, timestamp }) => {
	return `${timestamp} [${level}] ${message}`;
});

const logger = winston.createLogger({
	level: "debug",
	format: combine(
		timestamp(),
		myFormat
	),
	transports: [
		new winston.transports.Console(),
	]
});

logger.debug("Logger created");

module.exports = logger;
