const paymentInvoiceMailer = require('../paymentInvoiceMailer');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', 6);
const paymentprocesssvs = () => {
  return async (req, res, next) => {
    console.log(req.body);
    const recipient = req.body.userData.email;
    const userData = req.body.userData;
    paymentInvoiceMailer(userData, recipient);
    res.send({
      payment: 'completed',
    });
    next();
  };
};

module.exports = paymentprocesssvs;
