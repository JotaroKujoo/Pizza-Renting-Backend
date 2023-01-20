const {
    assertValidPasswordService,
    assertEmailIsUniqueService,
    assertEmailIsValidService,
    encryptPasswordService,
    createUserService

} = require("./../services/AuthServices");


const models = require("./../models/index");

require("dotenv").config();


const jsonwebtoken = require("jsonwebtoken");

const authRegisterController = async (req, res) => {
    const body = await req.body

    

    // Assert valid password
    try {
        assertValidPasswordService(body.password)
    }
    catch (error) {
        console.log(error)
        
        return res.status(400).json({
            error: "Invalid Password! Must contain 8 characters, a number, a lower and an upper case letter at least."
        });
    }
    
    // //Assert valid mail
    try {
        assertEmailIsValidService(body.mail)
        
    }
    catch (error) {
        console.log(error)
        
        return res.status(400).json({
            error: "Invalid Email Structure!"
        });
    }

    // //Assert the mail has been registered
    try {
        assertEmailIsUniqueService(body.mail)
        
    }
    catch (error) {
        console.log(error)
        
        return res.status(400).json({
            error: "This mail is already in use!"
        });
    }
    

    // //Create a new user
    try {
        await createUserService(body)
        .then(res.status(201).json({
            message: "Registered successfully"
        }))
        .catch(error => res.status(400).json({
            error: error
        }))
        
    }
    catch (error) {
        console.log(error)
        
        return res.status(500).json({
            error: "Something went wrong!"
        });

    }
}

//Login controller

const authLoginController = async (req,res) => {
    const body = req.body;
    
    //Find the user by mail

    try {
        const userFounded = await models.user.findOne({
            where: {
                mail: body.mail
            }
        })

        if (!userFounded) {
            return res.status(400).json({
                error: "Password or email does not match!"
            });
        }

        //Encrypt the password amd check if it matches with hash on DB

        const hashedPassword = await encryptPasswordService(body.password)

        //Assert if the password matches with hash on DB
        if(userFounded.password !== hashedPassword) {
            return res.status(400).json({
                error: "Password or email does not match!"
            })
        }

        //Setting the secret to the JWT
        const secret = process.env.JWT_SECRET || "paraquequieressaberlo"

        if (secret.length < 6){
            throw new Error("JWT_SECRET is not set correctly")
        }

        //Signing the JWT with the secret and the user data on the payload

        const jwt = jsonwebtoken.sign({
            mail: userFounded.mail,
            name: userFounded.name,
            id: userFounded.id,
            role: userFounded.roleId
        },secret)
        res.status(200).json({
            message: "Login successful",
            yourToken: jwt
        })

    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

module.exports = {
    authLoginController,
    authRegisterController
}