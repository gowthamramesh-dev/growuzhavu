const mongoose = require("mongoose");

const farmerSchema = new mongoose.Schema(
  {
    uname: { type: String, required: true },
    fname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    number: { type: String, required: true },
    password: { type: String, required: true },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Farmer", farmerSchema);
