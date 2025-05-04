const mongoose = require("mongoose");
const Farmer = require('../src/models/farmer.model');
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected Successfully to the Database");
    await Farmer.createCollection();
    comsole.log('User Empty Collection Created Successfully');
  } catch (error) {
    console.error("Error Connecting to the Database:", error.message);
    process.exit(1); // Exit process with failure
  }
};
connectDB();
module.exports = connectDB;
