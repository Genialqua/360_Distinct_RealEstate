const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  type: { type: String, default: 'brochure' },
  createdAt: { type: Date, default: Date.now }
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;