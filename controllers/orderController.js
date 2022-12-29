const models = require("../models/index");

const orderControllers = {};

//Order a pizza

orderControllers.orderPizza = async (req, res) => {
    try {
        let body = req.body;

        if (body.mail === req.auth.mail){
            let pizza = await models.pizza_ingredients.findOne({
                where : {
                    name: body.name,
                    idPizza: body.idPizza,
                    ingredient_1: body.ingredient_1,
                    ingredient_2: body.ingredient_2,
                    ingredient_3: body.ingredient_3,
                    ingredient_4: body.ingredient_4,
                    ingredient_5: body.ingredient_5,
                    ingredient_6: body.ingredient_6,

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
            }else{
                
            }
        }
    } catch (error) {
        res.json({message: "Error while creating order"})
        console.log(error)
    }
}

module.exports 