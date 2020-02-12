var express = require('express');
var router = express.Router();
var transporter = require('../config/transporter')


router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name}\n email: ${email}\n message: ${message} `

    console.log(content)

    var mail = {
        from: name,
        to: 'ldjantov@bulmag.bg',  //Change to email address that you want to receive messages on
        subject: 'New Message from Contact Form',
        text: message
    }

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

module.exports = router;