const bcrypt = require('bcryptjs');

const companies = [
  {
    companyName: 'Tesla',
    password: bcrypt.hashSync('tesla123', 10),
    isManufacturer: true,
  },
  {
    companyName: 'Honda',
    password: bcrypt.hashSync('honda123', 10),
    isManufacturer: true,
  },
  {
    companyName: 'TVS',
    password: bcrypt.hashSync('tvs123', 10),
    isManufacturer: true,
  },
  {
    companyName: 'Silicon Honda',
    password: bcrypt.hashSync('silicon123', 10),
  },
  {
    companyName: 'Hari Super Showroom',
    password: bcrypt.hashSync('hari123', 10),
  },
  {
    companyName: 'Shashanka Badva Showroom',
    password: bcrypt.hashSync('badva123', 10),
  },
];

module.exports = companies;
