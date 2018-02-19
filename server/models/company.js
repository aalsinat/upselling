'use strict';

// The Company model

var Sequelize = require('sequelize');
const Op = Sequelize.Op

var db = require('./../services/database');

// 1: The Company model schema.
var modelDefinition = {
    id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
    },
    tax_id: {
        type: Sequelize.STRING(20),
        allowNull: true
    },
    contact_person: {
        type: Sequelize.STRING(100),
        allowNull: true
    }
};

// 2: Define the Company model.
var CompanyModel = db.define('company', modelDefinition);

// 3. Synchronizing database model
CompanyModel.sync({alter: true});

module.exports = CompanyModel;