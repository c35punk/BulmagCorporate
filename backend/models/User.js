const mongoose = require('mongoose')
const encryption = require('../utilities/encryption')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let userSchema = new mongoose.Schema({
  email: {type: String, required: REQUIRED_VALIDATION_MESSAGE, unique: [true, 'User with that email already exists.']},
  username: {type: String, required: REQUIRED_VALIDATION_MESSAGE, unique: [true, 'User with that username already exists.']},
  salt: String,
  password: String, 
  roles: [String]
})

userSchema.method({
  authenticate: function (password) {
    return encryption.generateHashedPassword(this.salt, password) === this.password
  }
})

let User = mongoose.model('User', userSchema)

module.exports = User
module.exports.seedAdminUser = () => {
  User.find({}).then(users => {
    if (users.length > 0) return

    let salt = encryption.generateSalt()
    let password = encryption.generateHashedPassword(salt, 'admin')

    User.create({
      email: 'admin@admin.com',
      username: 'admin',
      salt: salt,
      password: password,
      roles: ['Admin']
    })
  })
}
