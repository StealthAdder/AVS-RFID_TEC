const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Company = require('../../models/companyModel');

// put this in env if this is leaked everything is fucked
const JWT_SECRET = 'slkjf48957()>?"{}{ZJKH@#$%^&jhfajkhfd';

const login = () => {
  return async (req, res) => {
    console.log(req.body);
    const { companyName, password } = req.body;
    const company = await Company.findOne({ companyName }).lean();

    if (!company) {
      return res.json({
        status: 'error',
        error: 'Invalid company name/password',
      });
    }

    if (await bcrypt.compare(password, company.password)) {
      // correct credentials so generate a token
      const token = jwt.sign(
        { id: company._id, companyName: company.companyName },
        JWT_SECRET
      );
      return res.status(200).json({ data: token });
    }
    res.json({ status: 'error', error: 'Invalid company name/password' });
  };
};

module.exports = login;
