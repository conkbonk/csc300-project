const mongoose = require("mongoose");

//user schema/model
const ratingSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      label: "username",
    },
    rating: {
      type: Number,
      required: true,
      label: "Rating",
    }
  },
  { collection: "rating" } 
  //hey
);

module.exports = mongoose.model('rating', ratingSchema)