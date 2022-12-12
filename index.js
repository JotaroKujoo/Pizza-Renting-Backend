const express = require('express')
const router = require('./router')
const db = require('./db/db')
const PORT = 3000


const app = express()

app.use(express.json())
app.use(router)

app.listen(PORT,()=>{
    console.log("server listening on port".PORT)
    db.authenticate().then(
        console.log("Conexión con la DB establecida")
    ).catch(error => 
        console.log("No se pudo conectar", error)
    )
})
