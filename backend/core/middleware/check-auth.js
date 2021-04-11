const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

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
