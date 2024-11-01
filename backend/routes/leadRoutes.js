const express = require("express");
const { createLead } = require("../controllers/leadController");
const router = express.Router();

router.post("/api/brochure", createLead);

module.exports = router;