const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors')
const express = require('express')
const path = require('path')


module.exports = (app) => {
  app.use(cors({ origin: '*' }));
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use('../public', express.static('public'));
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.use(bodyParser.json())
  app.use(passport.initialize())
  console.log('Express up and running...')
}
