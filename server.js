//Carrega o express, e subscreve na const app
const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true})) //Definir o conteúdo de request, usando req.body

const routes = require('./routes') //importando o modulo routes.js
app.use(routes) //Faz com que o express use as suas rotas


//Servidor sendo executado na porta 3001 localhost.
app.listen(3001, () => { 
    console.log(`Executando ${'http://localhost:3001'}`)
})