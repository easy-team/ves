'use strict';
module.exports = () => {
  return async function(ctx, next) {
    ctx.locals.title = 'ves';
    await next();
  };
};
