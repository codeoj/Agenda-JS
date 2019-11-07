//chamada express, e subscrição na const app
const express = require('express')
const app = express()
app.use(express.urlencoded({extended: true})) //Definir o conteúdo de request, usando req.body



//Servidor sendo executado na porta 3001 localhost.
app.listen(3001, () => { 
    console.log(`Executando ${'http://localhost:3001'}`)
})