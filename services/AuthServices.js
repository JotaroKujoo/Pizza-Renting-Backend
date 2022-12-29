const models = require("../models/index")

const crypto = require("node:crypto");


//Service to assert the password is valid

const assertValidPasswordService = (pass) =>{
    if (pass.length < 8 ){
        throw new Error("Password must be at least 8 characters")
    }
    if (!pass.match(/[a-z]/)) {
        throw new Error("Password must contain at least one lower case letter");
    }
    if (!pass.match(/[0-9]/)) {
        throw new Error("Password must contain at least one number")
    }
}

//Service to assert the email is valid
const assertEmailIsValidService = (mail) => {
    const emailRegex = 
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = mail.match(emailRegex);
    if (!isValid){
        throw new Error("Invalid email")
    }
}

//Service to check the email isn't already in use
const assertEmailIsUniqueService = async (mail) => {
    const user = await models.user.findOne({
        where: {mail: mail}
    })
    if (user){
        throw new Error("Email already in use");
    }
}

//Service to encrypt the password and create a hash
const encryptPasswordService = (pass) => {
    const hash = crypto
        .createHmac("sha512","")
        .update(pass)
        .digest("base64");
    return hash
}

//Service to create a new user on the database
const createUserService = async(userBody) => {
     const hash = encryptPasswordService(userBody.password);
     userBody.password = hash
     
     const user = await models.user.create({
        name: userBody.name,
        mail: userBody.mail,
        password: userBody.password,
        createdAt: "2022-12-23",
        updatedAt: "2022-12-23",
        roleId: 2
     })
     console.log("Aqui llegamos bien")
     return user;
}


module.exports = {
    assertValidPasswordService,
    assertEmailIsUniqueService,
    assertEmailIsValidService,
    encryptPasswordService,
    createUserService
}

