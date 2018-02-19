var Sequelize = require('sequelize');
const Op = Sequelize.Op

var db = require('./../services/database');

// 1: The Outlet model schema.
var modelDefinition = {
    id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    address: {
        type: Sequelize.STRING(150),
        allowNull: true
    },
    city: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    country: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    zip_code: {
        type: Sequelize.STRING(10),
        allowNull: true
    },
    brand_id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull: true
    },
    activity_id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull: true
    },
    company_id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull: true
    }
};

// 2: Define the Outlet model.
var OutletModel = db.define('outlet', modelDefinition);

// 3. Synchronizing database model
OutletModel.sync({alter: true});

module.exports = OutletModel;