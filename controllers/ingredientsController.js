const models = require("./../models/index")

const IngredientController = {}


IngredientController.getAllIngredients = async (req,res) => {
    try {
        let resp = await models.ingredients.findAll({})
        .then(res.send(resp))
        return res.status(200).json({
            message: "success",
            data: resp
        })
    
    } catch (error) {
        console.log(error)
    }
}

IngredientController.getIngredientsFromPizza = async (req, res) => {
    try {
        const body = req.body
        const foundedPizza = await models.pizzas.findOne({
            where:{
                name:body.name,
                pizzeriaName:body.pizzeria
            }
        })
        if(!foundedPizza){
            return res.status(404).json({message:"Pizza or pizzeria not founded"})
        }
        const pizzaWithIngredient = await models.pizza_ingredients.findAll({
            where:{
                idPizza: foundedPizza.id
            }
        })
        return res.status(200).json({
            pizzaWithIngredient,
            message: "success"
        })

    } catch (error) {
        
    }
}

module.exports = IngredientController