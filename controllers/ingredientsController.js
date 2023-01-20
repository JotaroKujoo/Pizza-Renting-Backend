const models = require("./../models/index")

const IngredientController = {}


IngredientController.getAllIngredients = async (req,res) => {
    try {
        let resp = await models.ingredients.findAll({})
        
        return res.status(200).json({
            message: "success",
            data: resp
        })
    
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: error
        })
    }
}

IngredientController.getIngredientsFromPizza = async (req, res) => {
    try {
        const params = req.params
        const foundedPizza = await models.pizza.findOne({
            where:{
                id: params.id
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
            data: pizzaWithIngredient,
            message: "success"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: error
        })
    }
}

module.exports = {IngredientController}