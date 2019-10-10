'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/render', controller.home.render);
  router.get('/renderClient', controller.home.renderClient);
  router.get('/renderAsset', controller.home.renderAsset);
  router.get('/renderNunjucks', controller.home.renderNunjucks);
};
