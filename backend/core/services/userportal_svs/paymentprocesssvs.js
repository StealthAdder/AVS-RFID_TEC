const paymentInvoiceMailer = require('../paymentInvoiceMailer');
const { customAlphabet } = require('nanoid');
const vehicleData = require('../../models/vehicleData');
const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', 12);
const paymentprocesssvs = () => {
  return async (req, res, next) => {
    // console.log(req.body);
    const recipient = req.body.userData.email;
    const userData = req.body.userData;
    const ticketId = req.body.ticketId;
    const receiptId = nanoid();
    try {
      // fetch
      console.log(`paying ${ticketId}`);
      // find userData
      const findViolation = await vehicleData.findOne({
        rf_tag: userData.rf_tag,
        'violation._id': ticketId,
      });
      if (findViolation.length != 0) {
        // change it
        query = { rf_tag: userData.rf_tag, 'violation._id': ticketId };
        update = {
          'violation.$.status': 'PAID',
          'violation.$.receiptId': receiptId,
        };
        try {
          let result = await vehicleData.updateOne(query, update, {
            new: true,
          });
          paymentInvoiceMailer(userData, ticketId, recipient, receiptId);
          res.send({
            payment: 'completed',
            ticketId,
            receiptId,
          });
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }

    next();
  };
};

module.exports = paymentprocesssvs;
