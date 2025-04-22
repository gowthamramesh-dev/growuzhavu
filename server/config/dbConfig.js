const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected Successfully to the Database");
  } catch (error) {
    console.error("Error Connecting to the Database:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
