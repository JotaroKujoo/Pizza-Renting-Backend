const models = require("../models/index");
const { createCustomPizzaService } = require("../services/AuthServices");


const OrderControllers = {};

//Order a pizza

OrderControllers.orderPizza = async (req, res) => {
    try {
        let body = req.body;

        let pizza = await models.pizzas.findOne({
            where: {
                name: body.namePizza,
                idPizza: body.idPizza
            }
        })

        if (!pizza) {
            return res.status(400).json({ message: "Pizza not founded" })
        }

        let resp = await models.orders.create({
            createdAt: "2022-12-23 00:00:00", //
            pizzaId: pizza.id,
            userId: req.auth.id,
            extra: body.extra,
            without: body.without
        })

        return res.status(200).json({
            resp,
            message: "Pizza Order Created Successfully"
        })

    } catch (error) {
        return res.status(error.status || 500).json({ message: "Error while creating order" })
    }
}


OrderControllers.getMyOrders = async (req, res) => {
    try {
        let orders = await models.orders.findAll({
            where: {
                userId: req.auth.id
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