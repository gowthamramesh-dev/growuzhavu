const mongoose = require("mongoose");

const editProfile = new mongoose.Schema(
  {
    author: {
      type: String,
    },
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
    password: {
      type: String,
    },
    address: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { collection: "editProfiles" }
);

editProfile.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("editProfile", editProfile);
