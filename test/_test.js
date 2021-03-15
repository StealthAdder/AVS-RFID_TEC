const mocha = require('mocha')
const connectDB = require('./testDB')
const Rfdata = require('../api/models/Rfdata')
const mongoose = require('mongoose')
const assert = require('assert')
const speedLimitRef = require('../api/models/speedLimitRef')
const speedviolationCheck = require('../api/functions/speedviolationCheck')
const trafficViolation = require('../api/models/trafficViolation')

describe('Mocha Test v0.0.2 for avs-v0.0.2', ()=>{

    // Describe each test using it
    it('Connection to Test DB', async ()=> {
        await connectDB()
    })

    it('Create records in Rfdata collection.', async ()=> {
        var date = new Date()
        const testData = {
            rf_tag: '868C0229',
            location: 'HEBBAL',
            zipcode: '560 032',
            rfd_id: 'ID-0',
            eventTime: date
        }
        const event = await Rfdata.create(testData)
        assert(event.isNew === false)

        const date1 = date.setSeconds(date.getSeconds() + 3)
        const testData1 = {
            rf_tag: '868C0229',
            location: 'HEBBAL',
            zipcode: '560 032',
            rfd_id: 'ID-0',
            eventTime: date1
        }
        const event1 = await Rfdata.create(testData1)
        assert(event1.isNew === false)
    })

    it('Create a speedlimitreference collection', async() => {
        const ref = {
            location: "HEBBAL",
            zipcode: "560 032",
            speedlimit: 60
        }
        const ref1 = await speedLimitRef.create(ref)
        assert(ref1.isNew === false)
    })

    it('check trafficviolation service', async () => {
        var date = new Date()
        const trafficEvent = {
            rf_tag: '868C0229',
            location: 'HEBBAL',
            zipcode: '560 032',
            rfd_id: 'RFD-1',
            eventTime: date
        }
        const trafficEvent1 = await trafficViolation.create(trafficEvent)
        assert(trafficEvent1.isNew === false)
    })

    it('check speedviolation service', async () => {
        const req = {
            body: {
                rf_tag: '868C0229',
                location: 'HEBBAL',
                zipcode: '560 032',
            }
        }
        const arry = []
        for await (const doc of Rfdata.find({rf_tag: req.body.rf_tag,}).limit(2).sort('-eventTime')) {
            let timestamp = new Date(doc.eventTime)
            // console.log(`${doc.rf_tag} --> ${timestamp.toLocaleTimeString()}`)
            arry.push(timestamp)
            // arry.push(timestamp.replace("AM","").replace("PM","").replace(" ",""))
            // timestamp = new Date(doc.eventTime).toLocaleTimeString()
        }
        await speedviolationCheck(req, arry)  
    })    
    it('clearing created collections & exiting', async () => {
        await mongoose.connection.dropDatabase()
    })
})