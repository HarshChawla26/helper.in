const mongoose = require('mongoose')

const slotDB = mongoose.model('slots',{
    serviceID:String,
    userID:String,
    slots:Array
})

module.exports = slotDB;