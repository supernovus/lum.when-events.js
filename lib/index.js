const core = require('@lumjs/core');
const lazy = core.lazy;
const E = lazy.def.e;

lazy(exports, 'Ready', () => require('./ready'), E);
lazy(exports, 'Received', () => require('./received'), E);
