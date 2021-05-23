const mongoose = require('mongoose');
const connectDB = require('../../api/config/db');
const dotenv = require('dotenv');
const companies = require('./companies');
const Company = require('../models/companyModel');

dotenv.config({ path: './api/config/config.env' });

connectDB();

const importData = async () => {
  try {
    // removes all the data and then add it
    await Company.deleteMany();

    await Company.insertMany(companies);
    console.log('Data Imported Successfully!!!');
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

importData();
