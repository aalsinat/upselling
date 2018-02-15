var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var company = require('./controllers/company');


function RestApiController(path, app) {
    /* Init internal properties */
    this._baseUrl = path;
    this._app = app;
}

RestApiController.prototype.serve = function () {
    /* set middleware actions */
    this._app.use(bodyParser.json());
    this._app.use(bodyParser.urlencoded({extended: false}));
    this._app.use(cookieParser());
    /* route to controllers */
    this._app.use(this._baseUrl + '/companies', company);
}


module.exports = RestApiController;
