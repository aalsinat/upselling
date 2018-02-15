var env = process.env.NODE_ENV || 'development';

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
