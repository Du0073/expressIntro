const express = require("express")

const app = express() //instancia de express
const port = 3005   //Puerto
app.set("port",port)

//Similar a un addEventListener
app.get("/", (req,res)=>{
    res.send("Hola Mundo")
}) 

app.listen(port,()=>{
    console.log(`Intro app escuchando el puerto ${port}`)
})