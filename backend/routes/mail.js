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
        to: 'ldjantov@bulmag.bg, vterziyski@bulmag.bg, office@bulmag.bg, bulmag@bulmag.bg',
        subject: 'New Contact Form Message',
        html: `<img src="https://team-vision.bg/wp-content/uploads/2019/08/Bulmag.png" alt="BULMAG AD"/><br/><h2>${name}</h2><h4>${message}</h4>`
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
})

module.exports = router;