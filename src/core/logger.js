"use strict";

var path = require('path');
var fs = require('fs');
var log4js = require('log4js');

var logDir = path.join(path.dirname(path.resolve('server.js')), 'logs');

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
    { type: 'file', filename: 'error.log',  category: 'error' }
  ]
}, { cwd: logDir });

exports.info = function(msg) {
  console.log(msg);
  log4js.getLogger('info').info(msg);
};

exports.error = function(msg) {
  log4js.getLogger('error').error(msg);
};
