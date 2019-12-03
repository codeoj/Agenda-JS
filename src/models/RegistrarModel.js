const mongoose = require('mongoose')

const RegistrarSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    descricao: String
})

const RegistrarModel = mongoose.model('Registrar', RegistrarSchema) //Nome do model e schema

class Registrar {
    constructor(body){
        this.body = body
        this.error = []
        this.user = null
    }
}

module.exports = Registrar