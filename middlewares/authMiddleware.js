const jsonwebtoken = require('jsonwebtoken');
require("dotenv").config;

const authBearerMiddleware = async (req, res,next) => {
    
    try {
        const { authorization } = req.headers;
        if(!authorization){
            return res.status(401).json({message:"Not token provided"});
        }
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
        next()
        
    } catch (error) {        
        res.status(401).json({message:"You're not authenticated"})
        console.log(error)
        return
    };
};



const isValidRole = (role) => (req,res,next) => {
    console.log(req.auth)
    if (req.auth?.role === role) {
        next();
    }else{
        res.status(401).json({message:"You're not authorized"})
        return

    }
}



module.exports = {
    authBearerMiddleware,
    isValidRole,
}