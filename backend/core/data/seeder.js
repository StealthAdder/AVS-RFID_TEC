const mongoose = require('mongoose');
const connectDB = require('../../api/config/db');
const dotenv = require('dotenv');
// data
const companies = require('./companies');
const fine = require('./fine');
const speedLimits = require('./speedLimits');
// models
const Company = require('../models/companyModel');
const fineRef = require('../../api/models/fineRef');
const speedLimitRef = require('../../api/models/speedLimitRef');
dotenv.config({ path: './api/config/config.env' });

connectDB();

const importData = async () => {
  try {
    // removes all the data and then add it
    await Company.deleteMany();

    await Company.insertMany(companies);
    console.log('Company Data Imported Successfully!!!');
  } catch (error) {
    console.log(error);
  }
  try {
    await fineRef.deleteMany();
    await fineRef.insertMany(fine);
    console.log('Fine Reference Data Imported Successfully!!!');
  } catch (error) {
    console.log(error);
  }
  try {
    await speedLimitRef.deleteMany();
    await speedLimitRef.insertMany(speedLimits);
    console.log('speedLimit Reference Data Imported Successfully!!!');
  } catch (error) {
    console.log(error);
  }

  process.exit(1);
};

importData();
