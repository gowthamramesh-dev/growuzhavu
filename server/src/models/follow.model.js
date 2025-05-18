const mongoose = require("mongoose");

const follow = new mongoose.Schema(
  {
    follower: {
      type: String,
      required: true,
    },
    following: {
      type: String,
      required: true,
    },
  },
  { collection: "follow" }
);

module.exports = mongoose.model("follow", follow);
