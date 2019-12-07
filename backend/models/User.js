const mongoose = require('mongoose')
const encryption = require('../utilities/encryption')

let userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, trim: true, minlength: 3 },
    salt: String,
    password: String,
    roles: [String],
    machines: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Machine'
    },
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
        let password = encryption.generateHashedPassword(salt, 'Admin123')

        User.create({
            email: 'admin@bulmag.bg',
            username: 'Admin',
            salt: salt,
            password: password,
            roles: ['Admin']
        })
    })
}
