module.exports = (req, res, next) => {
    console.log()
    console.log('Teste Middleware Global')

    next()
}
