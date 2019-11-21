require('dotenv').config()

//Carrega o express, e subscreve na const app
const express = require('express')
const app = express()

//Chamada, conexão, e string de conexão mongoose
const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true})

//fazendo a conexão com a base de dados conectar antes de escutar o host
    .then(() => {
        console.log('A base de dados tem que conectar antes!')
        app.emit('pronto')
})
.catch(e => console.log(e))

const routes = require('./routes') //importando o modulo routes.js
const Middleware = require('./src/middlewares/middleware') //importa o middleware global
const path = require('path')

app.use(express.static(path.resolve(__dirname, 'public')))
app.use(express.urlencoded({extended: true})) //Definir o conteúdo de request, usando req.body

//Configurando a view engine
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs') 

app.use(routes) //Faz com que o express use as suas rotas
app.use(Middleware)

app.on('pronto', () => {
    //Servidor sendo executado na porta 3001 localhost.
    app.listen(3001, () => { 
    console.log(`Executando ${'http://localhost:3001'}`)
    })
})
