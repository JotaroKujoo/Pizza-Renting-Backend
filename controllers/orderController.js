const models = require("../models/index");
const { createCustomPizzaService } = require("../services/AuthServices");


const OrderControllers = {};

//Order a pizza

OrderControllers.orderPizza = async (req, res) => {
    try {
        let body = req.body;

        
        let today = new Date()

        let resp = await models.orders.create({
            createdAt: `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`, //
            pizzaId: body.idPizza,
            userId: body.id,
            extra: body.extra,
            without: body.without,
            address: body.address,
            quantity: body.quantity,
            price: body.price
        })
        if(!resp){
            return res.status(400).json({
                error: "Error while creating order"
            })
        }

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

        if(!orders){
            return res.status(404).json({
                message:"No orders founded"
            })
        }

        return res.status(200).json({
            orders: orders
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error })
    }
}



//ADMIN ONLY
OrderControllers.getAllOrders = async (req, res) => {
    try {
        let orders = await models.orders.findAll({})

        if(!orders){
            return res.status(404).json({
                message:"No orders founded"
            })
        }


        return res.status(200).json(orders)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error })    }
}



module.exports = { OrderControllers }