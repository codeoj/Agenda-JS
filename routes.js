const express = require('express')
const route = express.Router() //Assim pode fazer o roteamento
const homePageController = require('./controllers/homePageController')//Importando o modulo da pasta controllers
module.exports = route //exportando o route, que contem todas as rotas, para o modulo server.js importa-lo


route.get('/', homePageController.funcaoHomePage)