const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9959,
        dbURL: 'mongodb://localhost:27017/project-manager'
    },
    production: {}
};

module.exports = config[env];
