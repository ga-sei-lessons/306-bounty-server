// require the mongoose package
const mongoose = require('mongoose')
/*
name: String
wantedFor: String
client: String
ship: String
reward: Number
captured: Bool
lastSeen: String
{ timestamps }
*/
// define a mongoose schema
const BountySchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
        // minlength: 2,
        // maxlength: 300
    },
    wantedFor: {
        type: String
    },
    client: {
        type: String
    },
    ship: {
        type: String
    },
    reward: {
        type: Number,
        // default: 10000
    },
    captured: {
        type: Boolean,
        // default: false
    },
    lastSeen: {
        type: String
    }
}, {
    timestamps: true
})

// create the mongoose model
// export the mongoose model
module.exports = mongoose.model('Bounty', BountySchema)