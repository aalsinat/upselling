// Application configuration.
'use strict';

var config = module.exports;

var env = config.env = process.env.NODE_ENV || 'development';

switch (env) {
    case 'development':
        process.env.PORT = 3000;
        process.env.CLEARDB_DATABASE_URL = 'mysql://upselling:mktinabox@127.0.0.1/upselling?reconnect=true';
        break;
    case 'test':
        process.env.PORT = 3000;
        process.env.CLEARDB_DATABASE_URL = 'mysql://upselling:mktinabox@127.0.0.1/upselling_test?reconnect=true';
        break;
}

config.db = {
    user: 'upselling',
    password: 'mktinabox',
    name: 'upselling'
};

config.db.details = {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
};

config.keys = {
    secret: '/jVdfUX+u/Kn3qPY4+ahjwQgyV5UhkM5cdh1i2xhozE=' // Not anymore...
};

var userRoles = config.userRoles = {
    guest: 1,    // ...001
    user: 2,     // ...010
    admin: 4     // ...100
};

config.accessLevels = {
    guest: userRoles.guest | userRoles.user | userRoles.admin,    // ...111
    user: userRoles.user | userRoles.admin,                       // ...110
    admin: userRoles.admin                                        // ...100
};