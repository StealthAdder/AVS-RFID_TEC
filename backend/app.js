const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const connectDB = require('./api/config/db');

// Def config.env path.
dotenv.config({ path: './api/config/config.env' });

// connecting to DB.
connectDB();

const app = express();

// Logs information about all the requests.
if (process.env.NODE_ENV === 'development') {
  // Middleware used to log requests.
  app.use(morgan('dev'));
}

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS ERROR HANDLER
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

// Routes
app.use('/api/rfdata', require('./api/routes/rfdata'));
app.use('/api/rftraffic', require('./api/routes/rftraffic'));

// Manufacturer SSO Routes
app.use(
  '/manufacturer_sso',
  require('./core/routes/manufacturer_sso/msRoutes')
);

app.use('/userportal_sso', require('./core/routes/userportal_sso/upRoutes'));

app.use('/admin_sso', require('./core/routes/admin_sso/asRoutes'));
const PORT = process.env.PORT || 5000;
const SERVER_IP = process.env.HOST || 'localhost';

app.listen(
  PORT,
  SERVER_IP,
  console.log(
    // `Server running in ${process.env.NODE_ENV} mode on port ${PORT} of ${SERVER_IP}`
    `Server running in ${process.env.NODE_ENV} mode at http://${SERVER_IP}:${PORT}`
  )
);
