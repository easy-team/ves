#!/usr/bin/env node

'use strict';
const path = require('path');
const fs = require('fs');
const EggScriptCommand = require('egg-scripts');
const cliFilePath = path.join(process.cwd(), 'node_modules', 'ves-cli');
// fix when production mode, ves-cli not exists, start app error by ves start
if (fs.existsSync(cliFilePath)) {
  const VesCLI = require(cliFilePath);
  new VesCLI.Command().start();
} else {
  new EggScriptCommand().start();
}
