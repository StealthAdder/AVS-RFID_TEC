const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config({ path: './api/config/config.env' });
const verifyMailer = (recipient, userData, OTP) => {
  // console.log(email);
  const output = `<p>Hello ${userData.regdOwner},</p><h3>OTP is ${OTP}</h3><p >If this OTP was not requested by You.\nPlease contact notification.avs@gmail.com</p>`;

  const transporter = nodemailer.createTransport({
    host: process.env['MAILER_HOST'],
    port: process.env['MAILER_PORT'],
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env['MAILER_USERNAME'], // generated ethereal user
      pass: process.env['MAILER_PASSWD'], // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: process.env['MAILER_FROMTAG'], // sender address
    to: recipient, // list of receivers
    subject: 'Track Vehicle - Verification', // Subject line
    html: output,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    // console.log('Message sent: %s', info.messageId);
    // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
};

module.exports = verifyMailer;
