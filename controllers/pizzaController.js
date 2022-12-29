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
        
        const foundedPizzas1 = await models.pizzas.findAll({
            where:{
                ingredient_1 : nameIngredient
            } 
        })
        const foundedPizzas2 = await models.pizzas.findAll({
            where:{
                ingredient_2 : nameIngredient
            } 
        })
        const foundedPizzas3 = await models.pizzas.findAll({
            where:{
                ingredient_3 : nameIngredient
            } 
        })
        const foundedPizzas4 = await models.pizzas.findAll({
            where:{
                ingredient_4 : nameIngredient
            } 
        })
        const foundedPizzas5 = await models.pizzas.findAll({
            where:{
                ingredient_5 : nameIngredient
            } 
        })
        const foundedPizzas6 = await models.pizzas.findAll({
            where:{
                ingredient_6 : nameIngredient
            } 
        })

        const foundedPizzas = (foundedPizzas1, foundedPizzas2, foundedPizzas3, foundedPizzas4,foundedPizzas5,foundedPizzas6).json()

        if (!foundedPizzas){
            res.status(404).send({
                message:"Error ingredient not found"
            })
        }
        return res.status(200).json(foundedPizzas)
            
        
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
}

module.exports = {PizzaController}