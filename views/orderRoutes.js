const express = require('express')
const router = express.Router()
const {isValidRole,isValidUser} = require("./../middlewares/authMiddleware")

const {OrderControllers} = require("./../controllers/orderController")

//Order one pizza
router.post("/orderpizza",OrderControllers.orderPizza)

//Get my orders
router.get("/myorders",isValidUser,OrderControllers.getMyOrders)

//Get all orders ADMIN ONLY
router.get("/allorders",isValidUser,isValidRole(1),OrderControllers.getAllOrders)

module.exports = router;