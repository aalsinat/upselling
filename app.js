'use strict';

var express = require('express'),
    passport = require('passport'),
    bodyParser = require('body-parser'),
    path = require('path'),
    favicon = require('serve-favicon');

var index = require('./routes/index'),
    config = require('./config'),
    strategy = require('./server/services/strategy');

// Initializations.
var app = express();

// Parse as urlencoded and json.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Hook up the HTTP logger.
app.use(require('./server/logger'));

// Hook up passport
app.use(passport.initialize());
strategy(passport);

// Set View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Set the static files location.
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

// Bundle API routes.
app.use('/', index);
app.use('/api', require('./routes/api')(passport));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
