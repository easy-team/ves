'use strict';
const utils = require('../lib/utils');
module.exports = app => {

  const exports = {};

  exports.view = {
    cache: false,
  };

  exports.static = {
    maxAge: 0, // maxAge cache, default one year, local disabled
  };

  exports.development = {
    watchDirs: [],
    ignoreDirs: [ 'app/web', 'public', 'config/manifest.json' ],
  };

  /**
   * egg-webpack plugin config
   * @member Config#webpack
   * @property {Array} webpackConfigList - webpack config
   */
  exports.webpack = {
    webpackConfigList: utils.getWebpackConfig(app),
  };

  return exports;
};
