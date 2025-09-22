let mongoose = require('mongoose');

let enquerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

// Model name = "Enquiry" (this becomes "enquiries" in MongoDB collection)
let Enquiry = mongoose.model('Enquiry', enquerySchema);

module.exports = Enquiry;
