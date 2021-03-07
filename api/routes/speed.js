const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Tag = require("../models/Tag");

router.post("/", (req, res, next) => {
    const tag = new Tag({
        _id: new mongoose.Types.ObjectId(),
        rf_tag: req.body.rf_tag,
        location: req.body.location,
        zipcode: req.body.zipcode,
        rfd_id: req.body.rfd_id,
    });

    tag.save().then((result) => {
        console.log(result);
        res.status(201)
            .json({
                message: "Doing bit by bit",
                createdEntry: tag,
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    error: err,
                });
            });
    });
});

module.exports = router;
