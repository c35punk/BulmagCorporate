var nodemailer = require('nodemailer');
// const creds = require('../config/mail-credentials');

let transporterToExport;

function getTransporter(tr) {
    transporterToExport = tr;
}

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


    var transporter = nodemailer.createTransport(transport).then(
        tr => {
            getTransporter(tr)
        }
    ).catch(err => { console.log("*@&#*@&#(*!&@^#*&^@!#*&^@!"), console.log(err) })



    transporter.verify((error, success) => {
        if (error) {
            console.log("===================================================");
            console.log(error);
            console.log("===================================================");
        } else if (success) {
            console.log('Mail ready to take messages...');
        }
    });
})
