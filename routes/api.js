'use strict';

var router = require('express').Router();

var config = require('./../config'),
    //allowOnly = require('../services/routesHelper').allowOnly,
    CompanyController = require('./../server/controllers/companyController');

var ApiRoutes = function () {
    // POST Routes.
    //router.post('/signup', AuthController.signUp);
    //router.post('/authenticate', AuthController.authenticateUser);

    // GET Routes.
    //router.get('/profile', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, UserController.index));
    //router.get('/admin', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, AdminController.index));
    router.get('/companies', CompanyController.findAll)

    return router;
};

module.exports = ApiRoutes;
