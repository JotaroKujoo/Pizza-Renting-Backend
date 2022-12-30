const models = require("../models/index");
const { createCustomPizzaService } = require("../services/AuthServices");


const orderControllers = {};

//Order a pizza

orderControllers.orderPizza = async (req, res) => {
    try {
        let body = req.body;

        if (body.mail === req.auth.mail){
            let pizza = await models.pizza_ingredients.findOne({
                where : {
                    name: body.name,
                    idPizza: body.idPizza
                }
            })

            if (pizza){
                let resp = await models.order.create({
                    createdAt: "22-12-2022",
                    id_pizza: pizza.id,
                    id_user: req.auth.id,
                    extra: pizza.extra,
                    without: pizza.without
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


orderControllers.orderCustomPizza = async (req, res) => {
    
}
module.exports = {orderControllers}