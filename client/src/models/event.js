const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new mongoose.Schema({
  event_name: {
    type: String,
    required: true
  },
  
  date: {
    type: String,
    required: true
  },

  time_start: {
    type: Number,
    required: true
  },

  time_end: {
    type: String,
    required: true
  },

  location: {
    type: String,
    default: ""
  }

});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
