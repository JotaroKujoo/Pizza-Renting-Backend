const express = require('express')
const router = require("./router")
const db = require('./db/db')
const PORT = process.env.PORT || 3000
require("dotenv").config
const HOST = process.env.DB_HOST || "0.0.0.0"
const cors = require('cors')


const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(PORT,"0.0.0.0",()=>{
    console.log("server listening on port",PORT)
    db.authenticate().then(
        console.log("Conexión con la DB establecida")
    ).catch(error => 
        console.log("No se pudo conectar", error)
    )
})

