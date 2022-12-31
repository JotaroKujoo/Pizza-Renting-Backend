const express = require('express');
const router = express.Router()

const {PizzeriaController} = require("./../controllers/pizzeriaController")

//Get pizzeria by name
router.get("/byname",PizzeriaController.findPizzeriaByName)

//Get pizzeria by ID
router.get("/byid",PizzeriaController.findPizzeriaById)


module.exports = router