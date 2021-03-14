const mongoose = require('mongoose')
const { customAlphabet } = require('nanoid')
const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 21)

const trafficViolationSchema = mongoose.Schema({
    ticketId: {
        type: String,
        required: true,
        default: () => nanoid()
    },
    violationType: {
        type: String,
        default: "Traffic Signal Violation",
        required: true
    },
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

module.exports = mongoose.model('trafficViolation', trafficViolationSchema)