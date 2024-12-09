const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const Login = async ({ email, password }) => {
    const user = await UserModel.findOne({ email });

    if (!user) {
        return {
            code: 400,
            success: false,
            data: null,
            message: 'Invalid credentials'
        }
    }

    const validPassword = await user.isValidPassword(password);

    if (!validPassword) {
        return {
            code: 400,
            success: false,
            data: null,
            message: 'Invalid credentials'
        }
    }

    const token = await jwt.sign({ email }, process.env.SECRET_KEY || 'super_secret');

    return {
        code: 200,
        success: true,
        data: { user, token },
        message: 'Login successful'
    }
}

const Signup = async ({ username, password, email }) => {

    const newUser = await UserModel.create({
        username,
        email,
        password
    })

    const token = await jwt.sign({ email }, process.env.SECRET_KEY || 'super_secret');

    return {
        code: 201,
        success: true,
        data: {
            user: newUser,
            token,
        }
    }
}

module.exports = {
    Login,
    Signup
}
