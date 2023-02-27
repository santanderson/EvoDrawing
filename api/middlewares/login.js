const jwt = require('jsonwebtoken')

function checkToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(!token) return res.status(401).json({msg: 'Acesso negado! Faça login primeiro!'})

    try {
        const secret = process.env.SECRET
        jwt.verify(token, secret)

        next()
    } catch(error) {
        return res.status(400).json({msg: 'Token inválido!'})
    }
}

module.exports = checkToken;