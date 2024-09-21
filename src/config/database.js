const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://namastedev:tzamitWl60wLhktw@namastenode.rc211ms.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
