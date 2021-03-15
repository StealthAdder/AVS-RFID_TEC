const express = require('express')
const router = express.Router()
const trafficViolation = require('../models/trafficViolation')

// JSON Middle
router.use(express.json())
router.use(express.urlencoded({extended: true}))

router.get('/', (req, res)=> {
    res.status(200)
    res.json({
        message: "Api v0.0.2 rftraffic Route Active and Listening"
    })
})

// @desc route for rfdata feed
// @route POST /api/rftraffic
router.post('/', async (req, res, done)=> {
    var date = new Date();
    const newEvent = {
        rf_tag: req.body.rf_tag,
        location: req.body.location,
        zipcode: req.body.zipcode,
        rfd_id: req.body.rfd_id,
        eventTime: date
    }
    try {
        let event = await trafficViolation.create(newEvent)
        done(null, event)
        console.log('Event Recorded')
        res.status(201).json({
            message: "Event Recorded",
            createdEntry: event
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({
            error: err,
        })
    }
})

module.exports = router