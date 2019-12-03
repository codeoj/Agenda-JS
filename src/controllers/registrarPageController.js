const Registrar = require('../models/RegistrarModel')

exports.index = (req, res) => {
    res.render('registrar')
}

exports.registrar = function(req, res) {
    const registrar = new Registrar(req.body)
    res.send(req.body)
}