var nodemailer = require('nodemailer');
const creds = require('../config/mailCredentials');

var transport = {
    host: 'mail.bulmag.bg',
    port: 25,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});