const mongoose = require("mongoose");
const { DB_CONNECTION_SECRET } = require("./config");

const connectDB = async () => {
  await mongoose.connect(DB_CONNECTION_SECRET);
};

module.exports = connectDB;
