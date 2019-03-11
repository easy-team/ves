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
   * cookie secret key
   */
  config.keys = appInfo.name + '_123456';

  /**
   * vue ssr plugin config
   * @member Config#vuessr
   * @property {String} layout - client render default html layout file path
   * @property {renderOptions} Object - vue server side render options
   */
  config.vuessr = {
    layout: path.resolve(__dirname, '../app/web/view/layout.html'),
    injectCss: true,
    renderOptions: {
      basedir: path.join(appInfo.baseDir, 'app/view'),
    },
  };

  return config;
};
