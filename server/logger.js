'use strict';

var fs = require('fs'),
    morgan = require('morgan'),
    path = require('path'),
    rfs = require('rotating-file-stream');

var logDirectory = path.join(__dirname, 'log');

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// create a rotating write stream
var accessLogStream = rfs('access.log', {
    interval: '1d', // rotate daily
    path: logDirectory
});

module.exports = morgan('common', {stream: accessLogStream});