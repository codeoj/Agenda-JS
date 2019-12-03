const express = require('express')
const route = express.Router() //Assim pode fazer o roteamento

const homePageController = require('./src/controllers/homePageController')//Importando os modulos da pasta controllers
const loginPageController = require('./src/controllers/loginPageController')
const registrarPageController = require('./src/controllers/registrarPageController')

module.exports = route //exportando o route, que contem todas as rotas, para o modulo server.js importa-lo

//usando as funções dos modulos. Rotas CRUD

//Rotas home
route.get('/', homePageController.index)

//Rotas login
route.get('/login', loginPageController.index)

//Rotas registrar
route.get('/registrar', registrarPageController.index)
route.post('/registrar', registrarPageController.registrar)
