const models = require("./../models/index");

const PizzaController = {};

PizzaController.getAllPizzas = async (req,res) => {
    try {
        const foundedPizzas = await models.pizza.findAll();
        console.log(foundedPizzas, 'pizza')
        return res.status(200).json(foundedPizzas);
    } catch (error) {
        console.log(error)
        console.log("AQUI ESTOY")
        res.status(404).send(error)
    }
}

PizzaController.getPizzasById = async (req, res) => {
    const pizzaId = req.body.id
    try {
        const foundedPizzas = await models.pizza.findOne({
            where:{
                id: pizzaId
            }
        })
        return res.status(200).json(foundedPizzas);
    } catch (error) {
        console.log(error)
        res.status(404).send(error);
    }
}



PizzaController.getPizzasByName = async (req, res) => {
    const pizzaName = req.body.name
    try {
        const foundedPizzas = await models.pizza.findAll({
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
        const foundedPizzas = await models.pizza.findAll({
            where:{
                pizzeriaName: pizzeriaName
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


PizzaController.getPizzasByIngredientInPizzeria = async (req,res) => {
    const nameIngredient = req.body.ingredient
    const pizzeriaName = req.body.pizzeria
    try {
        
        const foundedPizzas = await models.pizza_ingredients.findAll({
            where:{
                ingredient: nameIngredient,
                pizzeriaName: pizzeriaName
            }
        })
        



        return res.status(200).json(foundedPizzas);
            
        
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
}

module.exports = {PizzaController}