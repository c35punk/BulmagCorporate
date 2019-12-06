const jwt = require('jsonwebtoken')
const PassportLocalStrategy = require('passport-local').Strategy
const User = require('../models/User')

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userToLogin = {
    email: email.trim(),
    password: password.trim()
  }

  User
    .findOne({email: userToLogin.email})
    .then(user => {
      if (!user || !user.authenticate(userToLogin.password)) {
        const error = new Error('Incorrect email or password')
        error.name = 'IncorrectCredentialsError'
        return done(error)
      }

      const userToken = {
        sub: user.id
      }
      const token = jwt.sign(userToken, 'jwt jwt jwt jwt@!@!')
      const data = {
        username: user.username
      }

      if (user.roles) {
        data.roles = user.roles
      }

      return done(null, token, data)
    })
})
