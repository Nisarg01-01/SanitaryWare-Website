const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const User = require("../models/User");
const UserCart = require("../models/UserCart");
const { check, validationResult } = require("express-validator");
const session = require("../middleware/session");

module.exports = router;
