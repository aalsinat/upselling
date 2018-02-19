'use strict';

var config = require('./../../config'),
    db = require('../services/database'),
    Company = require('../models/company');

var CompanyController = {};

CompanyController.findAll = function(req, res) {
    Company.findAll().then(function (companies) {
        res.json(companies);
    });
}

CompanyController.findByKey = function (req, res) {

}

// CompanyModel.findAndCountAll({
//     where: {
//         name: {
//             like: 'ACM%'
//         }
//     }
// }).then(function (result) {
//     console.log(result.count);
//     console.log(result.rows);
// });

module.exports = CompanyController;