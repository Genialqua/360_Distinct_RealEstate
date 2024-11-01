const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// POST /api/bookings - Create a new booking
router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const newBooking = new Booking({ name, email, phone, message });
    await newBooking.save();
    
    res.status(201).json({ message: "Booking created successfully" });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ error: "An error occurred while creating the booking" });
  }
});

module.exports = router;