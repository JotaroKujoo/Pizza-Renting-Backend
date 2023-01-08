const models = require("./../models/index");
const {Op} = require("sequelize");
const { sequelize } = require("./../models/index");


const PizzeriaController = {}

PizzeriaController.findAllPizzerias = async(req,res) => {
    try {
        const foundedPizzerias = await models.pizzerias.findAll()
        if (! foundedPizzerias){
            return res.status(404).json({
                message: "No se han encontrado pizzerias"
            })
        }
        
        return res.status(200).json(foundedPizzerias)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            message: error
        })
        
    }
}

PizzeriaController.findPizzeriaByName = async (req,res) => {
    const pizzeriaName = await req.body.name
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
    return res.status(200).json({foundPizzeria});
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}



PizzeriaController.findPizzeriaById = async (req,res) => {
    const pizzeriaId = await req.params.id
    try {
        const foundPizzeria = await sequelize.query(
            `SELECT "id", "name" FROM "pizzerias" AS "pizzerias" WHERE "pizzerias"."id" = "${pizzeriaId}" LIMIT 1;`
        )
        return res.status(200).json({foundPizzeria});
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