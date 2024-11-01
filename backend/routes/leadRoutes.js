const express = require("express");
const { createLead } = require("../controllers/leadController");
const allowCors = require("../config/allowCors"); // adjust path as necessary

const router = express.Router();

// Apply allowCors only to this route
router.post("/api/brochure", allowCors(createLead));

module.exports = router;