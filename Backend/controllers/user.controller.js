const userModel = require('../models/user.model');
const userService = require('../services/user.services');
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { fullName, email, password } = req.body;

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstName : fullName.firstName,
        lastName : fullName.lastName,
        email,
        password : hashedPassword
    });

    const token = user.generateAuthToken();

    return res.status(201).json({token , user});

}

module.exports.loginUser = async (req, res, next) => {
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { email, password } = req.body;

    // .select('+password'); is used to select the password field which is not selected by default
    const user = await userModel.findOne({ email }).select('+password');

    if(!user){
        return res.status(401).json({message: 'Invalid email or password'});
    }

    // comparePassword is a method defined in the user model to compare the password entered by the user with the hashed password stored in the database
    const isMatch = await user.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({message: 'Invalid email or password'});
    }

    const token = user.generateAuthToken();

    res.cookie('token', token);

    res.status(200).json({token , user});
}

module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json({user: req.user});
}

module.exports.logoutUser = async (req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);

    if(!token)  res.status(200).json({message: 'User logged out successfully'});

    res.status(200).json({message: 'User logged out successfully'});
} 