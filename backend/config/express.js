const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors')
const express = require('express')


module.exports = (app) => {
  app.use(cors())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use('../public', express.static('public'));
  app.use(bodyParser.json())
  app.use(passport.initialize())
  console.log('Express up and running...')
}
