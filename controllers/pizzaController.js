const models = require("./../models/index");

const PizzaController = {};

PizzaController.getAllPizzas = async (req,res) => {
    try {
        const foundedPizzas = await models.pizzas.findAll();
        return res.status(200).json(foundedPizzas);
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
}

PizzaController.getPizzasByName = async (req, res) => {
    const pizzaName = req.body.name
    try {
        const foundedPizzas = await models.pizzas.findAll({
            where:{
                name: pizzaName
            }
        })
        return res.status(200).json(foundedPizzas);
    } catch (error) {
        console.log(error)
        res.status(404).send(error);
    }
}

PizzaController.getPizzasByPizzeria = async (req, res) => {
    const pizzeriaName = req.body.pizzeria
    try {
        const foundedPizzas = await models.pizzas.findAll({
            where:{
                name_pizzeria: pizzeriaName
            }
        })
        return res.status(200).json(foundedPizzas);
    } catch (error) {
        
    }
}


PizzaController.getPizzasByIngredient = async (req,res) => {
    const nameIngredient = req.body.ingredient
    try {
        
        const foundedPizzas = await models.pizza_ingredients.findAll({
            where:{
                ingredient: nameIngredient
            }
        })
        



        return res.status(200).json(foundedPizzas);
            
        
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
}


PizzaController.getPizzasByIngredientInRestaurant = async (req,res) => {
    const nameIngredient = req.body.ingredient
    const namePizzeria = req.body.pizzeria
    try {
        
        const foundedPizzas = await models.pizza_ingredients.findAll({
            where:{
                ingredient: nameIngredient,
                name_pizzeria: namePizzeria
            }
        })
        



        return res.status(200).json(foundedPizzas);
            
        
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
}

module.exports = {PizzaController}