// {"rf_tag":" 66 A1 41 29","location":"HEBBAL","zipcode":"560 032","rfd_id":"ID-0"}
const mongoose = require("mongoose");

const TagSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    rf_tag: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    zipcode: {
        type: String,
        required: true,
    },
    rfd_id: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Tag", TagSchema);
