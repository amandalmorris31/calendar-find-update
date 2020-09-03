const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const volunteerSchema = new mongoose.Schema({
  given_name: {
    type: String,
    required: true
  },
  
  family_name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  picture: {
    type: String,
    required: true
  },

  admin: {
    type: Number,
    default: 0
  }

});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;
