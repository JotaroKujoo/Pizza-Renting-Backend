const models = require("./../models/index");
const {Op} = require("sequelize")


const PizzeriaController = {}

PizzeriaController.findPizzeriaByName = async (req,res) => {
    const pizzeriaName = req.body.name
    try {
        
    const foundPizzeria = await models.pizzerias.findAll({
        where:{
            name:{
                [Op.like]:`%${pizzeriaName}%`

            }
        }
    })
    if(!foundPizzeria){
        return res.status(404).json({
            message: "Pizzeria no encontrada."
        })
    }
    return res.status(200).json(foundPizzeria);
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}



PizzeriaController.findPizzeriaById = async (req,res) => {
    const pizzeriaId = req.body.id
    try {
        const foundPizzeria = await models.pizzerias.findOne({
            where:{
                id:pizzeriaId
            }
        })
        return res.status(200).json(foundPizzeria);
    }catch(error){
        console.log(error)
        res.send(error)
    }
}

PizzeriaController.getPizzasOnPizzeria = async (req,res) => {
    const pizzeriaName = req.body.name

    const foundPizzeria = await models.pizzerias.findOne({
        where:{
            name:pizzeriaName
        }
    })
    if(!foundPizzeria){
        return res.status(404).json({
            message: "Pizzeria no encontrada."
        })
    }
    const pizzasOnPizzeria = models.pizza.findAll({
        where:{
            name_pizzeria:pizzeriaName
        }
    })
    return res.status(200).json(pizzasOnPizzeria)
    
}


module.exports = {PizzeriaController};