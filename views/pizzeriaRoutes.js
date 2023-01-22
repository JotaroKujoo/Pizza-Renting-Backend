const express = require('express');
const router = express.Router()

const {PizzeriaController} = require("./../controllers/pizzeriaController")

//Get pizzeria by name
router.get("/byname/:name",PizzeriaController.findPizzeriaByName)

//Get pizzeria by ID
router.get("/byid/:id",PizzeriaController.findPizzeriaById)

router.get("/all", PizzeriaController.findAllPizzerias)


module.exports = router