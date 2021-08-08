const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config({ path: './api/config/config.env' });
const paymentInvoiceMailer = (userData, ticketId, recipient, receiptId) => {
  // console.log(email);
  const output = `<p>Hello ${userData.regdOwner},</p><h3>Payment Success!</h3><h4>Ticket ID: ${ticketId} cleared.\nFuture reference please noted this Receipt ID: '${receiptId}'</h4><p >If any issues.\nPlease contact notification.avs@gmail.com</p>`;

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
    subject: `Ticket Id: XXXX${ticketId.substr(ticketId.length - 5)} Paid`, // Subject line
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

module.exports = paymentInvoiceMailer;
