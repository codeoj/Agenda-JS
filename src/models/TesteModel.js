const mongoose = require('mongoose')

const TesteSchema = new mongoose.Schema({
    titulo: {type: String, required: true}
})

const TesteModel = mongoose.model('Teste', TesteSchema) //Nome do model e schema

module.exports = TesteModel