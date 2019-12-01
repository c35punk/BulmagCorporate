const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9959,
        dbURL: 'mongodb://localhost:27017/bulmag-dev'
    },
    production: {
        development: {
            port: process.env.PORT || 19959,
            dbURL: 'mongodb://localhost:27017/bulmag-prod'
            
        }
    }
};

module.exports = config[env];
