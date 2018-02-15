'use strict';

//var config = require('./../../config'),
//    db = require('../services/database'),
//    Company = require('../models/company');

var CompanyController = {};

CompanyController.findAll = function(req, res) {
    res.json({message: 'List of all companies.'});
}

module.exports = CompanyController;