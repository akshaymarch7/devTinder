require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  DB_CONNECTION_SECRET: process.env.DB_CONNECTION_SECRET,
  JWT_SECRET: process.env.JWT_SECRET,

  RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
  RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET,
  RAZORPAY_WEBHOOK_SECRET: process.env.RAZORPAY_WEBHOOK_SECRET,

  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
  AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
};
