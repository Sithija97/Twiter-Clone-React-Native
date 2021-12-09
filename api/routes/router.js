const express = require("express");
const router = express.Router();

// controllers
const Auth = require("../controllers/auth");

router.post("/register", Auth.registerUser);
router.post("/login", Auth.loginUser);

module.exports = router;
