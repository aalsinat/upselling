// The User model.
'use strict';

var Sequelize = require('sequelize'),
    bcrypt = require('bcryptjs');

var config = require('./../../config'),
    db = require('./../services/database');

// 1: The User model schema.
var modelDefinition = {
    username: {
        type: Sequelize.STRING(20),
        primaryKey: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: true,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    role: {
        type: Sequelize.INTEGER,
        defaultValue: config.userRoles.user
    }
};

// 2: The model options.
var modelOptions = {
    instanceMethods: {
        comparePasswords: comparePasswords
    },
    hooks: {
        beforeValidate: hashPassword
    }
};

// 3: Define the User model.
var UserModel = db.define('user', modelDefinition, modelOptions);

// Compares two passwords.
function comparePasswords(password, callback) {
    bcrypt.compare(password, this.password, function (error, isMatch) {
        if (error) {
            return callback(error);
        }

        return callback(null, isMatch);
    });
}

// Hashes the password for a user object.
function hashPassword(user) {
    if (user.changed('password')) {
        return bcrypt.hash(user.password, 10).then(function (password) {
            user.password = password;
        });
    }
}

module.exports = UserModel;