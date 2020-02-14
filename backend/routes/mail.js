const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');



router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message



    var options = {
        auth: {
            api_user: 'ldjantov',
            api_key: 'Zaq1234567'
        }
    }

    var client = nodemailer.createTransport(sgTransport(options));
    var mail = {
        from: email,
        to: 'ldjantov@bulmag.bg, ldjantov@gmail.com, vterziyski@bulmag.bg',  //Change to email address that you want to receive messages on
        subject: 'New Message from Contact Form',
        html: `You have received message from <h1>${name}:</h1><br /><h4>${message}</h4>`
    }
    client.sendMail(mail, (err, data) => {
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

    });



    console.log("MAILMAILMAILMAILMAILMAILMAILMAILMAILMAILMAILMAILMAILMAIL")
    console.log(mail)

    console.log("REQ.BODY REQ.BODY REQ.BODY REQ.BODY REQ.BODY REQ.BODY REQ.BODY REQ.BODY REQ.BODY REQ.BODY REQ.BODY REQ.BODY REQ.BODY REQ.BODY REQ.BODY ")
    console.log(req.body)

})


module.exports = router;