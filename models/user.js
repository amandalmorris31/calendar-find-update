const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email : {type:String, required: true},
  picture: {type:String, required: true},
  admin : {type: Boolean, default: false},
  accept_evt: {type: String},
  decline_evt: {type: String}
});

const User = mongoose.model("User", userSchema);

module.exports = User;