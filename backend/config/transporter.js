var nodemailer = require('nodemailer');
// const creds = require('../config/mail-credentials');

var testAccount = nodemailer.createTestAccount().then(result => console.log(result));

var transport = {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    // auth: {
    //     user: testAccount.user,
    //     pass: testAccount.pass
    // }
};
var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log("===================================================");
        console.log(error);
        console.log("===================================================");
    } else {
        console.log('Mail ready to take messages...');
    }
});


module.exports = transporter;