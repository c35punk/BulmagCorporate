const PassportLocalStrategy = require('passport-local').Strategy
const User = require('../models/User')
const encryption = require('../utilities/encryption')

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const user = {
    email: email.trim(),
    password: password.trim(),
    username: req.body.username.trim(),
    companyName: req.body.companyName.trim(),
    contactPerson: req.body.contactPerson.trim(),
    companyImage: req.body.companyImage.trim(),
    vatNumber: req.body.vatNumber.trim(),
    address: req.body.address.trim(),
  }


  User
    .find({ email: email })
    .then(users => {
      if (users.length > 0) {
        return done('E-mail already exists!')
      }

      user.salt = encryption.generateSalt()
      user.password = encryption.generateHashedPassword(user.salt, user.password)

      if (user.username.substr(0, 7) === "Admin@!") {
        user.roles = ['Admin'];

        user.username = user.username.substr(7);

      } else {
        user.roles = ['User']
      }
      console.log("User from PASSPORT")
      console.log("=============================================")
      console.log("=============================================")
      console.log(user)
      console.log("=============================================")
      console.log("=============================================")
      User
        .create(user)
        .then(() => {
          return done(null)
        })
        .catch(() => {
          return done('Something went wrong :( Check the form for errors.')
        })
    })
})
