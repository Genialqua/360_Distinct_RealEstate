const Tour = require("../models/tour");

exports.createTour = async (req, res) => {
  try {
    const { name, email, phone, scheduledDate } = req.body;
    const tour = new Tour({ name, email, phone, scheduledDate });
    await tour.save();
    res.status(201).json({ message: "Tour scheduled successfully", tour });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};