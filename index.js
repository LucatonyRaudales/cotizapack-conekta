const express = require('express');
const conekta = require("./src/conekta");
const app = express();
const PORT = process.env.PORT || 3001;
var bodyParse = require('body-parser');
app.use(bodyParse.json());
app.get('/', (req, res) => res.status(200).send({"mensaje" : "mamamwebi"}))
app.post('/payment', conekta)
app.post('/prueba',(req,res)=>res.status(200).send(req.body))
app.listen(PORT, ()=> {
    console.log(`Escuchando en el puerto ${PORT}`)
})