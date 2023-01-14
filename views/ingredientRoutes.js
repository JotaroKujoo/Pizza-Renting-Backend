const express = require("express")
const router = express.Router()

const {IngredientController} = require("./../controllers/ingredientsController")


//Obtener listado de todos los ingredientes
router.get("/getall", IngredientController.getAllIngredients)

//Obtener los ingredientes de una pizza
router.get("/ingredientsfrompizza/:id", IngredientController.getIngredientsFromPizza)

module.exports = router;