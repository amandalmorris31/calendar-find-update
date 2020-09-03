const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONBODB_URI || "mondodb://localhost/volunteerCaldb"
);

const volunteerSeed =[
    {
      given_name: ["Amanda", "Darian","Katie"],
      family_name: ["Morris","Nocera", "Thorpe"],
      email: ["amandalmorris31@gmail.com", "darnocer@gmail.com","kthorpe1023@gmail.com"],
      picture: [""],
      admin: ["0"]
    }
];

const eventSeed =[
    {
      event_name: "",
      date: "",
      time_start: "",
      time_end: "",
      location: ""
    }
];
