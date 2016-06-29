# log-uncaught-exceptions

Logs uncaught process exceptions to the given logger (ideally a [Bunyan](https://github.com/trentm/node-bunyan) logger but works with any object with a `fatal` method).

Active maintainer: [ruben.norte@softonic.com](mailto:ruben.norte@softonic.com?subject=log-uncaught-exceptions)

## Installation

```bash
npm install log-uncaught-exceptions
```

## Usage

```js
// CommonJS
// const logUncaughtExceptions = require('log-uncaught-exceptions');

// ES6
import logUncaughtExceptions from 'log-uncaught-exceptions/es';

import bunyan from 'bunyan';
const logger = bunyan.createLogger({ name: "myapp" });

logUncaughtExceptions({ logger });
```

## Testing

Clone the repository and execute:

```bash
npm test
```

## Contribute

1. Fork it: `git clone ssh://git@stash.redtonic:7999/NODE/log-uncaught-exceptions.git`
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Added some feature'`
4. Check the build: `npm run build`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
