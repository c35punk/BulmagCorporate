let env = process.env.NODE_ENV || 'development'

let options = require('./config/options')[env]

const app = require('express')()

require('./config/database')(options)
require('./config/express')(app)
require('./config/routes')(app)
require('./config/passport')()

app.listen(options.port)
console.log(`Server up and listening on PORT: ${options.port}...`)
