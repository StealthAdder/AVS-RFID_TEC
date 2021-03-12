const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const mongoose = require('mongoose')
const connectDB = require('./api/config/db')

// Def config.env path.
dotenv.config({path: './api/config/config.env'})

// connecting to DB.
connectDB()

const app = express()

// Logs information about all the requests.
if (process.env.NODE_ENV === 'development') {
  // Middleware used to log requests.
    app.use(morgan('dev'))
}

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api', require('./api/routes/rfdata'))

const PORT = process.env.PORT || 5000
const SERVER_IP = process.env.HOST || 'localhost'

app.listen(PORT, SERVER_IP,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT} of ${SERVER_IP}`)
)