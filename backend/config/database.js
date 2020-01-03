const mongoose = require('mongoose')
const User = require('../models/User');
const Product = require('../models/Product')
const Service = require('../models/Service')
const Ticket = require('../models/Ticket')


mongoose.Promise = global.Promise

module.exports = (options) => {
  mongoose.connect(options.db, { useNewUrlParser: true, useUnifiedTopology: true })
  let db = mongoose.connection

  db.once('open', err => {
    if (err) {
      throw err
    }
    console.log('MongoDB up and running...')
    User.seedAdminUser()
    Product.initialList()
    // Ticket.initialList()
    Service.initialServicesList()
  })
  db.on('error', err => console.log(`Database error: ${err}`))
}
