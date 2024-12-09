const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');

const ValidateToken  = async (req, res, next) => {

    let bearerToken = req.headers.authorization;


    if (!bearerToken) {
        return res.status(403).json({
            message: 'Unauthorized'
        })
    }

    bearerToken = bearerToken.split(' ')[1] // ['Bearer' 'kasljdflsdjafkljklfflkdjflk']

    if (!bearerToken) {
        return res.status(403).json({
            message: 'Unauthorized'
        })
    }

    const validToken = await jwt.verify(bearerToken, process.env.SECRET_KEY || 'super_secret')

    if (!validToken) {
        return res.status(403).json({
            message: 'Unauthorized'
        })
    }

    const user = await UserModel.findOne({ email: validToken.email })

    if (!user) {
        return res.status(403).json({
            message: 'Unauthorized'
        })
    }

    req.user = user
    next()
} 

module.exports = {
    ValidateToken,
}