import assert from 'assert';

/**
 * Adds a handler for uncaught exceptions of the process that logs the error as fatal
 * in the given logger and exits the process with an error status
 * @param  {bunyan.Logger} options.logger
 */
export default function logUncaughtExceptions({ logger }) {
  assert(logger && typeof logger.fatal === 'function',
    `logger must have a fatal method: ${logger}`);

  process.on('uncaughtException', error => {
    logger.fatal({ error }, 'Uncaught server exception');
    process.exit(1);
  });
}
