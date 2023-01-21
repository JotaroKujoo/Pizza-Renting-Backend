const models = require("./../models/index");
const {Op, json} = require("sequelize")

const PizzaController = {};

PizzaController.getAllPizzas = async (req,res) => {
    try {
        const foundedPizzas = await models.pizza.findAll();
        if(!foundedPizzas){
            return res.status(404).json({error: "No pizzas founded"})
        }
        console.log(foundedPizzas, 'pizza')
        return res.status(200).json(foundedPizzas);
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}

PizzaController.getPizzasById = async (req, res) => {
    const pizzaId = req.params.id
    try {
        const foundedPizzas = await models.pizza.findOne({
            where:{
                id: pizzaId
            }
        })

        if(!foundedPizzas){
            return res.status(404).json({message: "No pizzas found"})
        }
        return res.status(200).json(foundedPizzas);
    } catch (error) {
        console.log(error)
        return res.status(404).send(error);
    }
}



PizzaController.getPizzasByName = async (req, res) => {
    const pizzaName = req.params.name
    try {
        let resp = await models.pizza.findAll({
            where:{
                name:{
                    [Op.like]: `%${pizzaName}%`
                }
                
            }
        })
        .then(resp => {
            res.send(resp);
        })
        .catch(err => {res.status(400).json({error:err.message})})
        return res.status(200).json(resp);
    } catch (error) {
        console.log(error)
        return res.status(500).send(error);
    }
}

PizzaController.getPizzasByPizzeria = async (req, res) => {
    const pizzeriaName = req.params.name
    try {
        const foundedPizzas = await models.pizza.findAll({
            where:{
                pizzeriaName: {
                    [Op.like]: `%${pizzeriaName}%`

                }
            }
        })

        if(!foundedPizzas){
            return res.status(404).json({message: "Error al buscar pizzas"})
        }

        return res.status(200).json(foundedPizzas);
    } catch (error) {
        return res.status(500).json({error: error});
    }
}


PizzaController.getPizzasByIngredient = async (req,res) => {
    const nameIngredient = req.body.ingredient
    try {
        
        const foundedPizzas = await models.pizza_ingredients.findAll({
            where:{
                ingredient: {
                    [Op.like]: `%${nameIngredient}%`

                }
            }
        })

        if(!foundedPizzas){
            return res.status(404).json({
                message: "No pizzas founded"
            })
        }
        



        return res.status(200).json(foundedPizzas);
            
        
    } catch (error) {
        console.log(error)
       return res.status(500).send(error)
    }
}


PizzaController.getPizzasByIngredientInPizzeria = async (req,res) => {
    const nameIngredient = req.body.ingredient
    const pizzeriaName = req.body.pizzeria
    try {
        
        const foundedPizzas = await models.pizza_ingredients.findAll({
            where:{
                ingredient: {
                    [Op.like]: `%${nameIngredient}%`
                },
                pizzeriaName: pizzeriaName
            }
        })
        
        if(!foundedPizzas){
            return res.status(404).json({message:"No pizzas founded"})
        }


        return res.status(200).json(foundedPizzas);
            
        
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
}


module.exports = {PizzaController}