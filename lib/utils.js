'use strict';
const path = require('path');
const fs = require('fs');
exports.getWebpackConfig = appInfo => {
  const filepath = path.join(appInfo.baseDir, 'node_modules', 'ves-cli');
  const cwdFilepath = path.join(process.cwd(), 'node_modules', 'ves-cli');
  if (fs.existsSync(filepath) || fs.existsSync(cwdFilepath)) {
    const cli = require('ves-cli');
    return cli.getWebpackConfig();
  }
  return [];
};
