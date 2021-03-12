const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

// Import the model
const Rfdata = require('../models/Rfdata')

// Middle for JSON and URLENCODED
router.use(express.json());
router.use(express.urlencoded({extended: false}));

// @desc test route for rfdata
// @route GET /api/rfdata
router.get('/rfdata', (req, res)=> {
    res.status(200)
    res.json({
        message: "Api v0.0.2 Routes Active and Listening"
    })
})

// @desc route for rfdata feed
// @route POST /api/rfdata
router.post('/rfdata', async (req, res, done) => {
    let date = Date()
    // timestamp = new Date(date).toLocaleTimeString()
    console.log(date)
    const newEvent = {
        rf_tag: req.body.rf_tag,
        location: req.body.location,
        zipcode: req.body.zipcode,
        rfd_id: req.body.rfd_id,
        eventTime: date
    }
    // console.log(newEvent)

    try {
        let event = await Rfdata.create(newEvent)
        done(null, event)
        console.log('Event Recorded')
        if (req.body.rfd_id === 'ID-1') {
            let timestamp = new Date(date).toLocaleTimeString()
            console.log(`event fired at ${timestamp}`)
        }
        res.status(201).json({
            message: "Event Recorded",
            createdEntry: event,
        })
    } catch (err) {
        console.error(err)
        res.send(500).json({
            error: err,
        })
    }
})

module.exports = router