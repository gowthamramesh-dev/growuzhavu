const mongoose = require("mongoose");
const Farmer = require('../src/models/userModel');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongodb_url);
    console.log("Connected Successfully to the Database");
    await Farmer.createCollection();
    console.log('User Empty Collection Created Successfully');
  } catch (error) {
    console.error("Error Connecting to the Database:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
