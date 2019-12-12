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
    .findOne({ email: userToLogin.email })
    .then(user => {
      if (!user || !user.authenticate(userToLogin.password)) {
        const error = new Error('Incorrect email or password')
        error.name = 'IncorrectCredentialsError'
        return done(error)
      }

      console.log("local sign in");
      console.log(user);

      const userToken = {
        sub: user.id
      }
      const token = jwt.sign(userToken, 'default@!@!@!')
      const data = {
        username: user.username,
        email: user.email,
        companyName: user.companyName,
        contactPerson: user.contactPerson,
        companyImage: user.companyImage,
        vatNumber: user.vatNumber,
        address: user.address,

      }

      if (user.roles) {
        data.roles = user.roles
      }

      return done(null, token, data)
    })
})
