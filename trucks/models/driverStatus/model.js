const mongoose = require('mongoose');
const { schema } = require('./schema');
const DriverStatus = mongoose.model('DriverStatus', schema);


module.exports = { DriverStatus };