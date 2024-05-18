const express = require('express');
const Customer = require('../models/Customer'); // Assuming Customer model is defined in models/Customer.js
const router = express.Router();

// Create a new customer
router.post('/', async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).send(customer);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).send(customers);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a customer by room_id
router.put('/:room_id', async (req, res) => {
  try {
    const customer = await Customer.findOneAndUpdate({ room_id: req.params.room_id }, req.body, { new: true });
    if (!customer) {
      return res.status(404).send();
    }
    res.send(customer);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a customer by room_id
router.delete('/:room_id', async (req, res) => {
  try {
    const customer = await Customer.findOneAndDelete({ room_id: req.params.room_id });
    if (!customer) {
      return res.status(404).send();
    }
    res.send(customer);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
