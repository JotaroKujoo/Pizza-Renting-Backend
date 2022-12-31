const models = require("../models/index")

const UserControllers = {}

const {encryptPasswordService} = require("../services/AuthServices")

//Get the data from my profile

UserControllers.getMyData = async (req, res) => {
    const mail = req.auth.mail
    const resp = await models.user.findOne({
        where:{
            mail: mail
        }
    })
    return res.status(200).json(resp)
}

//Update the user data
UserControllers.updateUserData = async (req, res) => {
    const mail = req.auth.mail
    const user = req.body    
    const userFound = await models.user.findOne({
        where: {
            mail: req.auth.mail
        }
    })
    let newPassword = userFound.password
    if (user.password) {
        newPassword = encryptPasswordService(user.password)
    }
    let resp = await models.user.update(
        {
            name:user.name,
            mail: user.mail,
            password: newPassword
        },
        {
            where: {
                mail: mail
            }
        }
    )
    return res.status(200).json(resp,{
        message: "user updated successfully"
    })
    
}

//Delete an user ONLY ADMIN

UserControllers.deleteUser = async (req, res) => {
    const mail = req.body.mail
    if (mail === req.auth.mail){
        throw new Error("You can't delete yourself as administrator")
    }
    let resp = await models.user.destroy({
        where: {
            mail: mail
        }
    })
    return res.status(200).json(resp,{
        message: "User deleted successfully"
    });
}


module.exports = {UserControllers}