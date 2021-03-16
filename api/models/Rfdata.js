const mongoose = require('mongoose')

const RfdataSchema = new mongoose.Schema({
    rf_tag: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    rfd_id: {
        type: String,
        required: true
    },
    eventTime: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Rfdata', RfdataSchema)