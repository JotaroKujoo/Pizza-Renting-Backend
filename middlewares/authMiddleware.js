const jsonwebtoken = require('jsonwebtoken');
require("dotenv").config;

const authBearerMiddleware = async (req, res,next) => {
    
    try {
        const { authorization } = req.headers;
        const [strategy, jwt] = authorization.split(" ");
        if (strategy.toLowerCase() !== "bearer") {
            throw new Error("Invalid strategy")
        };
        const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET || "paraquequieressaberlo");
        const created = payload.created;
        const timeElapsed = Date.now() - created;
        const maxTimeElapsed = 3600000 // 1 hour
        if (timeElapsed > maxTimeElapsed) {
            throw new Error("Token has expired")
        }
        req.auth = payload;
        console.log("Aqui llega")
        next()
        

    } catch (error) {
        
        console.log("Aqui llega")
        res.status(401).json({message:"You're not authenticated"})
        console.log(error)
        return
    };
};



const isValidRole = (role) => (req,res,next) => {
    if (req.auth?.role === role) {
        next();
    }else{
        res.status(401).json({message:"You're not authorized"})
        return

    }
}

const isValidUser = async (req,res,next) => {
    const mail = req.body.mail
    if(req.auth?.mail === mail){
        next();
    }else{
        res.status(401).json({message:"You're not authorized"})
        return

    }
}

module.exports = {
    authBearerMiddleware,
    isValidRole,
    isValidUser
}