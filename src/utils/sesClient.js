const { SESClient } = require("@aws-sdk/client-ses");
const { AWS_ACCESS_KEY, AWS_SECRET_KEY } = require("../config/config");
// Set the AWS Region.
const REGION = "ap-south-1";
// Create SES service object.
const sesClient = new SESClient({
  region: REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
  },
});

module.exports = { sesClient };
// snippet-end:[ses.JavaScript.createclientv3]
