const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const customerRoutes = require('./routes/customers'); // Correct reference to customers route

const app = express();
const PORT = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors());


// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/hotelManagement', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const customerSchema = new mongoose.Schema({
  room_id: String,
  customer_name: String,
  customer_age: Number,
  customer_address: String,
  customer_mobileNo: String,
  customer_aadharno: String,
});

const Customer = mongoose.model('Customer', customerSchema);

// Use the customer routes
app.use('/api/customers', customerRoutes);

app.post('/api/login', async (req, res) => {
  // Authentication logic here
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
