const express = require("express");
const router = express.Router();

const authRoutes = require("./views/authRoutes")

router.use("/auth", authRoutes)

module.exports = router