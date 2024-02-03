const mongoose = require('mongoose')

const formDataSchema = new mongoose.Schema(
{
  name: String,
  email: String,
  phone: Number,
  Gender: String,
  address: String,
  college: String,
  education: String,
  DOB: String,
  skills: String,
  state: String,
  role: String,
  experience: String,
  comment: String
}
);

const dataModel = mongoose.model('dataModel', formDataSchema);
module.exports = dataModel;