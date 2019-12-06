const mongoose = require('mongoose')
const User = require('../models/User')

mongoose.Promise = global.Promise

module.exports = (options) => {
  mongoose.connect(options.db)
  let db = mongoose.connection

  db.once('open', err => {
    if (err) {
      throw err
    }
    console.log('MongoDB ready!')
    User.seedAdminUser()
  })
  db.on('error', err => console.log(`Database error: ${err}`))
}
