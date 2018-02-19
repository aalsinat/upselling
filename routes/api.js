'use strict';

var router = require('express').Router();

var config = require('./../config'),
    //allowOnly = require('../services/routesHelper').allowOnly,
    AuthController = require('./../server/controllers/authController'),
    CompanyController = require('./../server/controllers/companyController');

var ApiRoutes = function (passport) {
    // POST Routes.
    router.post('/signup', AuthController.signUp);
    //router.post('/authenticate', AuthController.authenticateUser);

    // GET Routes.
    //router.get('/profile', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, UserController.index));
    //router.get('/admin', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, AdminController.index));

    // Resource company
    outer.get('/companies', passport.authenticate('jwt', { session: false }), CompanyController.findAll);

    return router;
};

module.exports = ApiRoutes;
