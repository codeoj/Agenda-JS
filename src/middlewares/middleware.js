module.exports = (req, res, next) => {
    console.log('Teste Middleware Global')

    next()
}

