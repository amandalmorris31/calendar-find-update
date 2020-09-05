const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const volunteerSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  
  last_name: {
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
  },

  accept_evt: {
    type:Schema.Types.ObjectId,
    ref:"Event"
  }

});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;
