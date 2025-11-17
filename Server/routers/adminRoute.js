const express = require("express");
const router = express.Router();
const Admin = require("../models/adminModel");
const adminController = require("../controllers/adminController");

// Admin login
router.post("/login",adminController.adminLogin);

module.exports = router;