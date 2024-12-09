const AuthService = require('../services/auth.service');

const Signup = async (req, res) => {

    const payload = req.body; // username, password, email

    const signupResponse = await AuthService.Signup({
        username: payload.username,
        email: payload.email,
        password: payload.password,
    })

    res.status(signupResponse.code).json(signupResponse)
}

const Login = async (req, res) => {

    const payload = req.body; // password, email

    const loginResponse = await AuthService.Login({
        email: payload.email,
        password: payload.password,
    })

    res.status(loginResponse.code).json(loginResponse)
}

module.exports = {
    Login,
    Signup
}