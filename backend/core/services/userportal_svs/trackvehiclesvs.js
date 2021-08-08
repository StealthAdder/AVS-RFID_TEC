const verifyMailer = require('../verifyMailer');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', 6);
const trackvehiclesvs = () => {
  return async (req, res, next) => {
    // console.log(req.body);
    const recipient = req.body.email;
    const userData = req.body.userData;
    const OTP = nanoid();
    verifyMailer(recipient, userData, OTP);
    res.send({
      otp: OTP,
    });
    next();
  };
};

module.exports = trackvehiclesvs;
