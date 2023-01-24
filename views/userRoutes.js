const express = require("express")
const router = express.Router()


const { UserControllers } = require("./../controllers/userController")
const { isValidRole } = require("./../middlewares/authMiddleware")


//Get data from user
router.get("/getmyuserdata/:mail", UserControllers.getMyData)

//Update data from user
router.patch("/updatemyuserdata", UserControllers.updateUserData)

//Delete an user ONLY ADMIN
router.delete("/deleteuser", isValidRole(1), UserControllers.deleteUser)

//Get all users ONLY ADMIN

router.get("/getallusers/:role", isValidRole(1), UserControllers.getAllUsers)

module.exports = router