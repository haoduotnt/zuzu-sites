
const path = require('path');
const fs = require('fs');
const log4js = require('log4js');

const logDir = path.join(path.dirname(path.resolve('server.js')), 'logs');

try {
  if (!fs.statSync(logDir).isDirectory()) {
    fs.unlinkSync(logDir);
    fs.mkdirSync(logDir);
  }
} catch (e) {
  fs.mkdirSync(logDir);
}

log4js.configure({
  appenders: [
    { type: 'file', filename: 'system.log', category: 'info' },
    { type: 'file', filename: 'error.log', category: 'error' },
  ],
}, { cwd: logDir });

exports.info = function info(msg) {
  log4js.getLogger('info').info(msg);
};

exports.error = function error(msg) {
  log4js.getLogger('error').error(msg);
};
