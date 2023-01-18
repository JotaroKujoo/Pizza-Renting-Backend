const models = require("../models/index");
const { createCustomPizzaService } = require("../services/AuthServices");


const OrderControllers = {};

//Order a pizza

OrderControllers.orderPizza = async (req, res) => {
    try {
        let body = req.body;

        
        let today = new Date()

        let resp = await models.orders.create({
            createdAt: `${today.getFullYear()}-${today.getMonth()+1}-${today.getDay()}`, //
            pizzaId: body.idPizza,
            userId: body.id,
            extra: body.extra,
            without: body.without,
            address: body.address,
            quantity: body.quantity,
            price: body.price
        })

        return res.status(200).json({
            resp,
            message: "Pizza Order Created Successfully"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Error while creating order ", error: error })
    }
}


OrderControllers.getMyOrders = async (req, res) => {
    try {
        let orders = await models.orders.findAll({
            where: {
                userId: req.params.id
            }
        })

        return res.status(200).json({
            orders: orders
        })
    } catch (error) {
        res.json({ message: "Any order founded" })
        console.log(error)
    }
}



//ADMIN ONLY
OrderControllers.getAllOrders = async (req, res) => {
    try {
        let orders = await models.orders.findAll()

        return res.status(200).json(orders)
    } catch (error) {
        res.json({ message: "Any order founded" })
        console.log(error)
    }
}



module.exports = { OrderControllers }