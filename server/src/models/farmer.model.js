const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const farmerSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    number: { type: String, required: true },
    usertype: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true, collection: "farmers" }
);

farmerSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

farmerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("Farmer", farmerSchema);
