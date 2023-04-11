const mongoose = require("mongoose");

//user schema/model
const ratingSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      label: "username",
    },
    stationName: {
      type: String,
      required: true,
      label: "StationName",
  },
    comment: {
    type: String,
    required: true,
    label:"comment",
  }
  },
  { collection: "comments" } 
  //hey
);

module.exports = mongoose.model('stationComments', ratingSchema)