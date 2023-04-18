const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      label: "name",
    },
    email: {
        type: String,
        required: true,
        label: "email",
    },
    message: {
        type: String,
        required: true,
        label: "message",
    },

  },
  { collection: "contact us" } 
);

module.exports = mongoose.model('contactUs', messageSchema)
