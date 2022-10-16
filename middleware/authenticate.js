const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    try{
        const token = req.headers.authenticate.split(' ')[1]
        const decode = jwt.verify(token, 'AzT2321')

        req.user = decode
        next()
        
    }catch(error)
    {
        res.json({
            message: ' Authenticatetion Failed'
        })
    }
}

module.exports = authenticate