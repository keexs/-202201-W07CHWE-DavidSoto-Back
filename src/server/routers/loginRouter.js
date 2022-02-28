const express = require("express");
const { signIn, loginUser } = require("../controllers/loginController");

const router = express.Router();

router.post("/signin", signIn);
router.post("/login", loginUser);

module.exports = router;
