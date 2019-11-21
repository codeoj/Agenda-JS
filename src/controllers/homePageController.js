const TesteModel = require('../models/TesteModel')

TesteModel.create({
    titulo: 'Título teste'
})
.then(dados => console.log(dados))
.catch(e => console.log(e))

exports.funcaoHomePage = (req, res) => { //exportando a função "funcaoHomePage"
    res.render('index') 
    return
}

