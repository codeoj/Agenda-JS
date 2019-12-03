const mongoose = require('mongoose')

const RegistrarSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    senha: {type: String, required: true}
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