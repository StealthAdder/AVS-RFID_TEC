const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './api/config/config.env' });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_TEST, {
      // avoid errors on console.
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    // console.log(`Connected to ${conn.connection.host}`)
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
