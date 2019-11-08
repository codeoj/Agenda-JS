const express = require('express')
const route = express.Router() //Assim pode fazer o roteamento

module.exports = route //exportando o route, que contem todas as rotas, para o modulo server.js importa-lo

//Importando os modulos da pasta controllers
const homePageController = require('./src/controllers/homePageController')

//usando as funções dos modulos. Rotas CRUD
//Rotas home
route.get('/', homePageController.funcaoHomePage)