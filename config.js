// Application configuration.
'use strict';

var config = module.exports;

var env = config.env = process.env.NODE_ENV || 'test';

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
    uri: process.env.CLEARDB_DATABASE_URL,
    options: {
        define: {
            freezeTableName: true,
            charset: 'utf8',
            dialectOptions: {
                collate: 'utf8_general_ci'
            },
            timestamps: true
        }
    }
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