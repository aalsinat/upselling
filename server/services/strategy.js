'use strict';

var strategy = require('passport-jwt').Strategy,
    extract = require('passport-jwt').ExtractJwt;

var userModel = require('../models/user'),
    config = require('../../config');

// Hooks the JWT strategy
function hookStrategy(passport) {
    var options = {};

    options.secretOrKey = config.keys.secret;
    options.jwtFromRequest = extract.fromAuthHeaderAsBearerToken();
    options.ignoreExpiration = false;

    passport.use(new strategy(options, function (jwtPayload, callback) {
        userModel.findOne({where:{username: jwtPayload.username}})
            .then(function (user) {
                if (!user) {
                    callback(null, false);
                    return;
                }
                callback(null, user);
            })
    }));
}

module.exports = hookStrategy;