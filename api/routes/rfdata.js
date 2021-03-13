const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const rf_v = require('../functions/rfdata_vio')

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
    var date = new Date();
    // timestamp = new Date(date).toLocaleTimeString()
    // console.log(date)
    const newEvent = {
        rf_tag: req.body.rf_tag,
        location: req.body.location,
        zipcode: req.body.zipcode,
        rfd_id: req.body.rfd_id,
        eventTime: date
    }

    try {
        let event = await Rfdata.create(newEvent)
        done(null, event)
        console.log('Event Recorded')
        res.status(201).json({
            message: "Event Recorded",
            createdEntry: event
        })
        if (req.body.rfd_id === 'ID-1') {
            console.log('Middleware Fired.')
            const rf_tag = req.body.rf_tag
            const arry = []
            for await (const doc of Rfdata.find({rf_tag: rf_tag,}).limit(2).sort('-eventTime')) {
                let timestamp = new Date(doc.eventTime)
                console.log(`${doc.rf_tag} --> ${timestamp}`)
                arry.push(timestamp)
                // arry.push(timestamp.replace("AM","").replace("PM","").replace(" ",""))
                // timestamp = new Date(doc.eventTime).toLocaleTimeString()
            }
            console.log('---------------')
            console.log(arry)
            console.log('-------end--------')
            rf_v(arry)
        }
        
    } catch (err) {
        console.error(err)
        res.status(500).json({
            error: err,
        })
    }
})

module.exports = router