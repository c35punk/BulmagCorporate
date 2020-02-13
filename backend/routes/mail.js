var express = require('express');
var router = express.Router();
var transporter = require('../config/transporter')


router.post('/send', (req, res, next) => {

    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name}\n email: ${email}\n message: ${message} `


    var mail = {
        from: name,
        to: 'ldjantov@bulmag.bg, support@bulmag.bg, bulmag@bulmag.bg, vterziyski@bulmag.bg',  //Change to email address that you want to receive messages on
        subject: 'New Message from Contact Form',
        text: 'New Message',
        html: `You have received message from <h1>${name}:</h1><br /><h4>${message}</h4>`
    }


    console.log("40")
    console.log(req.body)
    console.log("transporter")

    console.log(transporter)
    console.log("MAILWHJUDIEWDGFQYUGEQYUFGEQYUGQEMAIL")
    console.log(mail)

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