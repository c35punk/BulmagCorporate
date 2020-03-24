const path = require('path')

let rootPath = path.normalize(path.join(__dirname, '/../'))

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://localhost:27017/bulmag-development',
    port: 9949
  },

  production: {
    port: process.env.PORT,
    db: 'mongodb://localhost:27017/bulmag-development',
    port: 9949
  }
}
