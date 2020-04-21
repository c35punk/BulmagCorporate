const jwt = require('jsonwebtoken')
const User = require('../models/User')

module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).end()
  }

  console.log(req.headers)

  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1]


  // decode the token using a secret key-phrase
  return jwt.verify(token, 'p4ss', (err, decoded) => {
    if (err) {
      return console.log('JWT ERROR!'), res.status(401).end()
    }

    const userId = decoded.sub
    User
      .findById(userId)
      .then(user => {
        if (!user) {
          return console.log('No USER!'), res.status(401).end()
        }

        req.user = user

        return next()
      })
  })
}
