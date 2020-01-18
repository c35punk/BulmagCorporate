var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../config/mailCredentials');

var transport = {
    host: 'smtp.bulmag.bg',
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

router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message} `

    console.log(content)

    var mail = {
        from: name,
        to: 'ldjantov@bulmag.bg',  //Change to email address that you want to receive messages on
        subject: 'New Message from Contact Form',
        text: content
    }

    console.log(res)

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                msg: 'fail'
            })
        } else {
            res.json({
                msg: 'success'
            })
        }
    })
})

module.exports = router;