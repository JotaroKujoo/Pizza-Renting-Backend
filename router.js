const express = require("express");
const router = express.Router();

const authRoutes = require("./views/authRoutes")
const pizzasRoutes = require("./views/pizzasRoutes")
const userRoutes = require("./views/userRoutes")
const pizzeriaRoutes = require("./views/pizzeriaRoutes")
const ordersRoutes = require("./views/orderRoutes")
const ingredientRoutes = require("./views/ingredientRoutes")
const {authBearerMiddleware} = require("./middlewares/authMiddleware")


router.use("/pizzeria",pizzeriaRoutes)
router.use("/auth", authRoutes)
router.use("/pizzas", pizzasRoutes)
router.use("/ingredients",ingredientRoutes)




router.use(authBearerMiddleware)
router.use("/user", userRoutes)
router.use("/orders", ordersRoutes)


module.exports = router