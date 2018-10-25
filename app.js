'use strict';
// https://github.com/eggjs/egg/issues/1520
module.exports = app => {
  app.config.coreMiddleware.push('locals');
};
