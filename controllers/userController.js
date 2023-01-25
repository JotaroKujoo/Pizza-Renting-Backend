const models = require("../models/index")

const UserControllers = {}

const { encryptPasswordService } = require("../services/AuthServices")

//Get the data from my profile

UserControllers.getMyData = async (req, res) => {
    try {
        const mail = req.params.mail
        const resp = await models.user.findOne({
            where: {
                mail: mail
            }
        })

        if (!resp) {
            return res.status(404).json({ message: "No user founded" })
        }
        return res.status(200).json(resp)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error })
    }
}

//Update the user data
UserControllers.updateUserData = async (req, res) => {
    try {
        const user = req.body
        const userFound = await models.user.findOne({
            where: {
                mail: user.mail
            }
        })

        if (!userFound) {
            return res.status(404).json({ message: "Usuario no encontrado" })
        }

        let newPassword = userFound.password
        if (user.password) {
            newPassword = encryptPasswordService(user.password)
        }
        await models.user.update(
            {
                name: user.name,
                mail: user.mail,
                password: newPassword,
                address: user.address
            },
            {
                where: {
                    mail: user.mail
                }
            }
        ).then((resp)=>{
            return res.status(200).json({message:"updated succesfully"})
        }).catch((error)=>{
            return res.status(404).json(error)

        })
        

    } catch (error) {
        return res.status(500).json(error)
    }

}

//Delete an user ONLY ADMIN

UserControllers.deleteUser = async (req, res) => {
    try {
        const mail = req.body.mail
        if (mail === req.auth.mail) {
            throw new Error("You can't delete yourself as administrator")
        }
        let resp = await models.user.destroy({
            where: {
                mail: mail
            }
        })
        if (!resp) {
            return res.status(404).json({ message: "User not deleted" })
        }
        return res.status(200).json({resp,
            message: "User deleted successfully"
        });
    } catch (error) {
        return await res.status(500).json({ error: error })
    }
}


UserControllers.getAllUsers = async (req, res) => {
    try {
        return await models.user.findAll({})
        .then((resp)=>{
            return res.status(200).json(resp)})
        .catch((error)=>{
            console.log(error)
            return res.status(401).json(error)})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error })
    }
}


module.exports = { UserControllers }