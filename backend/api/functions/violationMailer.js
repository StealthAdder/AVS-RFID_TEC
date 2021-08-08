const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config({ path: './api/config/config.env' });
const violationMailer = (recipient, violationData) => {
  // console.log(recipient.email);
  // console.log(violationData);
  // console.log(process.env.MAILER_HOST);
  // console.log(process.env.MAILER_PORT);
  // console.log(process.env.MAILER_USERNAME);
  // console.log(process.env.MAILER_PASSWD);
  // console.log(process.env.MAILER_FROMTAG);
  const output = `<h4>${violationData.violationType}</h4>
  	<h3>Ticket ID: <span>${violationData._id}</span></h3>
  	<p >Location: ${violationData.location}, ${violationData.zipcode}</p>
  	<p>Event Time:  ${violationData.eventTime}</p>
  	<p>
  		<p>Evaluation : ${violationData.notes}</p>
  	</p>
  		<p >Fine Amount: ₹${violationData.fineAmount}/-</p>
  	</div>`;

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
    to: recipient.email, // list of receivers
    subject: 'Violation Ticket', // Subject line
    text: 'Hello world?', // plain text body
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

module.exports = violationMailer;
