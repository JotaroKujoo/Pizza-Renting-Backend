const express = require('express');
const router = express.Router();


const {PizzaController} = require("./../controllers/pizzaController")

//Get all pizzas
router.get("/getall",PizzaController.getAllPizzas)

//Get pizzas by name
router.get("/getbyname/:name",PizzaController.getPizzasByName)

//Get pizzas in a Pizzeria
router.get("/getbypizzeria/:name",PizzaController.getPizzasByPizzeria)

//Get pizzas by ingredient
router.get("/getbyingredient",PizzaController.getPizzasByIngredient)

//Get pizza by Id
router.get("/getbyid",PizzaController.getPizzasById)

//Get pizzas by ingredient in a pizzeria
router.get("/getbyingredientinpizzeria",PizzaController.getPizzasByIngredientInPizzeria)

module.exports = router;
