'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = {};

  /**
   * some description
   * @member Config#test
   * @property {String} key - some description
   */
  config.test = {
    key: appInfo.name + '_123456',
  };

  /**
   * egg-static plugin
   * @member Config#static
   * @property {String} prefix - static file url visit prefix
   * @property {String} dir - static file dir
   */
  config.static = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, 'public'),
  };

  /**
   * vue ssr plugin config
   * @member Config#vuessr
   * @property {String} layout - client render default html layout file path
   * @property {renderOptions} Object - vue server side render options
   */
  config.vuessr = {
    layout: path.resolve(__dirname, '../app/web/view/layout.html'),
    renderOptions: {
      basedir: path.join(appInfo.baseDir, 'app/view'),
    },
  };

  return config;
};
