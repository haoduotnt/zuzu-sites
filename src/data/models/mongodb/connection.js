"use strict";

import { databaseUrl } from './../../config';

var connection = require('mongoose').createConnection(databaseUrl);
var logger = require('./../../libs/logger');

connection.on('error', logger.error);

module.exports = connection;
