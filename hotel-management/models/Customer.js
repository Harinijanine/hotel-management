const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  room_id: { type: String, required: true, unique: true },
  customer_name: { type: String, required: true },
  customer_age: { type: Number, required: true },
  customer_address: { type: String, required: true },
  customer_mobileNo: { type: String, required: true },
  customer_aadharno: { type: String, required: true },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
