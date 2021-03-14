const mongoose = require('mongoose')
const { customAlphabet } = require('nanoid')
const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 21)

const violationSchema = new mongoose.Schema({
    ticketId: {
        type: String,
        required: true,
        default: () => nanoid()
    },
    rf_tag: {
        type: String,
        required: true
    },
    speedRecorded: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    eventTime: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('violation', violationSchema)