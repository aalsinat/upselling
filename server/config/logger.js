var fs = require('fs');
var morgan = require('morgan');
var path = require('path');
var rfs = require('rotating-file-stream');

function Logging() {
    this._path = __dirname;
    this._interval = '1d';
    this._filename = 'access.log';
    this._format = 'common';
}

Logging.prototype.setInterval = function (interval) {
    this._interval = interval;
};

Logging.prototype.setFormat = function (format) {
    this._format = format;
};

Logging.prototype.getLogger = function (path, filename) {
    this._filename = filename;
    this._path = path;
    // ensure log directory exists
    fs.existsSync(this._path) || fs.mkdirSync(this._path);
    // create a rotating write stream
    var accessLogStream = rfs(this._filename, {
        interval: this._interval,
        path: this._path
    });
    return morgan(this._format, {stream: accessLogStream});
};

module.exports = new Logging();