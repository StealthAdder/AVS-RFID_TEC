const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Company = require('../../models/companyModel');

// put this in env if this is leaked everything is fucked
const JWT_SECRET = process.env.JWT_SECRET;

const login = () => {
  return async (req, res) => {
    console.log(req.body);
    const { companyName, password } = req.body;
    const company = await Company.findOne({ companyName });
    console.log(company);
    if (company === null) {
      return res.status(401).json({
        message: 'Access Denied',
      });
    }

    if (await bcrypt.compare(password, company.password)) {
      // correct credentials so generate a token
      const token = jwt.sign(
        { id: company._id, companyName: company.companyName },
        JWT_SECRET
      );
      return res
        .status(200)
        .json({ data: token, companyName: company.companyName });
    }
    res.status(401).json({ message: 'Access Denied' });
  };
};

module.exports = login;
