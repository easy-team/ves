'use strict';
const path = require('path');
const fs = require('fs');
exports.getCli = () => {
  return { name: 'ves-cli', cmd: 'ves', package: 'ves-cli' };
};
exports.getWebpackConfig = appInfo => {
  const cli = exports.getCli();
  const filepath = path.join(appInfo.baseDir, 'node_modules', cli.package);
  const cwdFilepath = path.join(process.cwd(), 'node_modules', cli.package);
  if (fs.existsSync(filepath) || fs.existsSync(cwdFilepath)) {
    const vesCli = require(cli.package);
    return vesCli.getWebpackConfig();
  }
  return [];
};
