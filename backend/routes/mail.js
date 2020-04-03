const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');


function validateMailForm(payload) {
    const errors = {}
    let isFormValid = true

    // if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
    //     isFormValid = false
    //     errors.name = 'Please provide your name.'
    // }

    // if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0 || !validator.isEmail(payload.email)) {
    //     isFormValid = false
    //     errors.email = 'Please provide your email address.'
    // }
    // if (!payload || typeof payload.message !== 'string' || payload.message.trim().length === 0 || !validator.isEmail(payload.message)) {
    //     isFormValid = false
    //     errors.message = 'Please write us a message.'
    // }


    if (!isFormValid) {
        errors.message = 'Check mail form for errors'
    }

    return {
        success: isFormValid,
        errors
    }
}


router.post('/send', (req, res, next) => {


    const validationResult = validateMailForm(req.body)
    if (!validationResult.success) {
        return res.status(200).json({
            success: false,
            errors: validationResult.errors
        })
    }

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
        to: 'ldjantov@bulmag.bg, vterziyski@bulmag.bg, nzets@bulmag.bg, gchompalov@bulmag.bg',
        subject: 'New Contact Form Message',
        html: `<img src="https://team-vision.bg/wp-content/uploads/2019/08/Bulmag.png" alt="BULMAG AD"/><br/><h2>${name}</h2><br/><h4>${message}</h4>`
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