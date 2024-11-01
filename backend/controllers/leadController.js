const Lead = require("../models/lead");

exports.createLead = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const lead = new Lead({ name, email, phone });
    await lead.save();
    res.status(201).json({ message: "Lead created successfully", lead });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};