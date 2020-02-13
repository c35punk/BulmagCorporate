var express = require('express');
var router = express.Router();
// var transporter = require('../config/transporter')
var nodemailer = require('nodemailer')


router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message


    var tempAccount = nodemailer.createTestAccount().then(result => {

        var transport = {
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: result.user,
                pass: result.pass
            }

        };
        var transporter = nodemailer.createTransport(transport)

        var mail = {
            from: email,
            to: 'ldjantov@bulmag.bg, ldjantov@gmail.com',  //Change to email address that you want to receive messages on
            subject: 'New Message from Contact Form',
            html: `You have received message from <h1>${name}:</h1><br /><h4>${message}</h4>`
        }

        console.log(mail)

        console.log("40")
        console.log(req.body)
        console.log("42")

        transporter.sendMail(mail, (err, data) => {
            if (err) {
                console.log(err)
                res.json({
                    msg: 'fail'
                })
            } else {
                console.log(data)
                res.json({
                    msg: 'success'
                })
            }
        })
    })
})


module.exports = router;