const express = require("express");
const router = express.Router();

const authRoutes = require("./views/authRoutes")
const pizzasRoutes = require("./views/pizzasRoutes")
const {authBearerMiddleware} = require("./middlewares/authMiddleware")

router.use("/auth", authRoutes)
router.use("/pizzas", pizzasRoutes)

module.exports = router