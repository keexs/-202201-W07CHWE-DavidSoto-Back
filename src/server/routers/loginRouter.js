const express = require("express");

const router = express.Router();

router.post("/signIn", userSignIn);
router.post("/login", userLogin);

module.exports = router;
