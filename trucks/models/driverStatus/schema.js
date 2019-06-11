const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  _id: {
    type: String,
    required: [true],
  },
  status: {
    type: String,
    required: [true],
  }
}, { _id: false });

module.exports = { schema };