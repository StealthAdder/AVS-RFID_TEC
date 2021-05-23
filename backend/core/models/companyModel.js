const mongoose = require('mongoose');

const CompanySchema = mongoose.Schema(
  {
    companyName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isManufacturer: { type: Boolean, required: true, default: false },
  },
  { collection: 'companies' }
);

const model = mongoose.model('CompanySchema', CompanySchema);

module.exports = model;
