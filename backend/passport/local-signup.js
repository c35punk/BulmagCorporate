const PassportLocalStrategy = require('passport-local').Strategy
const User = require('../models/User')
const encryption = require('../utilities/encryption')

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, error) => {
  console.log(email)
  const user = {
    email: email.trim(),
    password: password.trim(),
    username: req.body.username.trim()
  }

  User
    .find({email: email})
    .then(users => {
      if (users.length > 0) {
        return error('E-mail already exists!')
      }

      user.salt = encryption.generateSalt()
      user.password = encryption.generateHashedPassword(user.salt, user.password)
      user.roles = []

      User
        .create(user)
        .then(() => {
          return error(null)
        })
        .catch(() => {
          return error('Something went wrong :( Check the form for errors.')
        })
    })
})
