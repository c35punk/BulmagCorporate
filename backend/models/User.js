const mongoose = require('mongoose')
const encryption = require('../utilities/encryption')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let userSchema = new mongoose.Schema({
  email: { type: String, required: REQUIRED_VALIDATION_MESSAGE, unique: [true, 'User with that email already exists.'] },
  username: { type: String, required: REQUIRED_VALIDATION_MESSAGE, unique: [true, 'User with that username already exists.'] },
  salt: String,
  password: String,
  companyName: String,
  address: String,
  companyImage: String,
  contactPerson: String,
  vatNumber: String,
  contracts: [],
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
    let passwordVivacom = encryption.generateHashedPassword(salt, 'vivacom123')

    User.create(
      {
        email: 'admin@admin.com',
        username: 'admin',
        salt: salt,
        password: password,
        roles: ['Admin'],
        companyName: 'Bulmag AD',
        address: '7 Grigorii Gorbatenko str.',
        contactPerson: 'Dobrin Danov',
        vatNumber: 'BG030008679',
        companyImage: 'https://team-vision.bg/wp-content/uploads/2019/08/Bulmag.png',
        contracts: []
      },
      {
        email: 'procurement@vivacom.bg',
        username: 'Vivacom Employee',
        salt: salt,
        password: passwordVivacom,
        roles: ['User'],
        companyName: 'Vivacom',
        address: 'Tsarigradsko shose',
        contactPerson: 'Atanas Dobrev',
        vatNumber: 'BG7658830934',
        companyImage: 'http://www.vivacom.bg/web/files/richeditor/about/logo-600.png',
        contracts: []
      })
  })
}
