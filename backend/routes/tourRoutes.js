const express = require("express");
const { createTour } = require("../controllers/tourController");
const router = express.Router();

router.post("/api/virtual-tour", createTour);

module.exports = router;