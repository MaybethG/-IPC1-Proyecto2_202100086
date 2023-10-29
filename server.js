const express = require("express");
const { request } = require("http");
const app= express()
const port = 3000;

app.use(express.json())

app.get('/iniciado',(request,response)=>{
    response.status(200).json({
        Mensaje: "La solicitud es correcta"
    })

})

app.listen(port, ()=>{
    console.log('Servidor ejecutandose en el puerto ${port}')
})
