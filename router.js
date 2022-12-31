const express = require("express");
const router = express.Router();

const authRoutes = require("./views/authRoutes")
const pizzasRoutes = require("./views/pizzasRoutes")
const userRoutes = require("./views/userRoutes")
const pizzeriaRoutes = require("./views/pizzeriaRoutes")
const ordersRoutes = require("./views/orderRoutes")
const {authBearerMiddleware} = require("./middlewares/authMiddleware")


router.use("/pizzeria",pizzeriaRoutes)
router.use("/auth", authRoutes)
router.use(authBearerMiddleware)
router.use("/pizzas", pizzasRoutes)
router.use("/user", userRoutes)
router.use("/orders", ordersRoutes)

module.exports = router