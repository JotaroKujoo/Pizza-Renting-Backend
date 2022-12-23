const models = require("../models/index");

const OrderControllers = {};

//Order a pizza

OrderControllers.orderPizza = async (req, res) => {
    try {
        let body = req.body;

        if (body.mail === req.auth.mail){
            let pizza = await models.pizza.findOne({
                where : {
                    name: body.name,
                    name_pizzeria: body.pizzeria

                }
            })
            if (pizza){
                let resp = await models.order.create({
                    createdAt: "22-12-2022",
                    id_pizza: pizza.id,
                    id_user: req.auth.id
                })
                return res.status(200).json(resp,{
                    message: "Pizza Order Created Successfully"
                })
            }
        }
    } catch (error) {
        res.json({message: "Error while creating order"})
        console.log(error)
    }
}

module.exports = {OrderControllers}