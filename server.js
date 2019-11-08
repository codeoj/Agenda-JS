//Carrega o express, e subscreve na const app
const express = require('express')
const app = express()
const routes = require('./routes') //importando o modulo routes.js
const path = require('path')

app.use(express.urlencoded({extended: true})) //Definir o conteúdo de request, usando req.body

//Configurando a view engine
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes) //Faz com que o express use as suas rotas

//Servidor sendo executado na porta 3001 localhost.
app.listen(3001, () => { 
    console.log(`Executando ${'http://localhost:3001'}`)
})