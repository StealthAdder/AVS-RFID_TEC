const jwt = require('jsonwebtoken');
const JWT_SECRET = 'slkjf48957()>?"{}{ZJKH@#$%^&jhfajkhfd';

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    // add process.env.JWT_SECRET

    req.companyData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'haha Access Denied',
    });
  }
};
