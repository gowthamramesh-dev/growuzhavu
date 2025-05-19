const mongoose = require("mongoose");

const editProfile = new mongoose.Schema(
  {
    author: {
      type: String,
      default: "",
    },
    picture: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      default: "",
    },
    mobile: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
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
