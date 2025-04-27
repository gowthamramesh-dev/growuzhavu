const mongoose = require("mongoose");

const editProfile = new mongoose.Schema({
  picture: {
    type: String,
  },
  name: {
    type: String,
  },
  gender: {
    type: String,
  },
  mobile: {
    type: String,
  },
  oldPass: {
    type: String,
  },
  newPass: {
    type: String,
  },
  address: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("editProfile", editProfile);
