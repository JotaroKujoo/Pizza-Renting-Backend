const express = require("express")
const router= express.Router()


const {UserControllers} = require("./../controllers/userController")
const {isValidUser, isValidRole} = require("./../middlewares/authMiddleware")


//Get data from user
router.get("/getmyuserdata", isValidUser,UserControllers.getMyData)

//Update data from user
router.patch("/updatemyuserdata", isValidUser,UserControllers.updateUserData)

//Delete an user ONLY ADMIN
router.delete("/deleteuser", isValidUser,isValidRole(1),UserControllers.deleteUser)

module.exports = router