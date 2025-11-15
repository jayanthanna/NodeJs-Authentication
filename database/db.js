const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo DB connected Successfully");
  } catch (e) {
    console.log("Connection Error", e);
    process.exit(1);
  }
};

module.exports = connectToDB;
