const express = require('express')
const router = require("./router")
const db = require('./db/db')
const PORT = process.env.PORT || 3000
require("dotenv").config


const app = express()

app.use(express.json())
app.use(router)

app.listen(PORT,()=>{
    console.log("server listening on port",PORT)
    db.authenticate().then(
        console.log("Conexión con la DB establecida")
    ).catch(error => 
        console.log("No se pudo conectar", error)
    )
})

