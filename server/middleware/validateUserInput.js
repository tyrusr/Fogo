const { body } = require('express-validator');

const validateUserLogin = [
    body('email')
    .isEmail()
    .withMessage('Please enter a valid email address')
    .isLength({ max: 254 })
    .withMessage('Email too long'),

    body('password')
    .isLength({ min: 1, max: 254 })
    .withMessage('Password must be at least 6 characters long')
]

const validateUserRegister = [
    body('username')
    .isString()
    .withMessage('Username must be text')
    .isLength({ min: 1, max: 30 })
    .withMessage('Username must be at least 1 character long and 30 characters long')
    .trim()
    .notEmpty()
    .withMessage('Username cannot be empty'),
    
    body('email')
    .isEmail()
    .withMessage('Please enter a valid email address')
    .isLength({ max: 254 })
    .withMessage('Email too long'),

    body('password')
    .isLength({ min: 6, max: 254 })
    .withMessage('Password must be at least 6 characters long')
]

const validateCreateListing = [
    body('name')
    .isLength({ max: 150 })
    .withMessage('Name is too long'),

    body('price')
    .isFloat({ min: 0.01, max: 9999999.99 })
    .withMessage('Price must be between 0.01 and 9999999.99'),

    body('description')
    .isLength({ max: 500 })
    .withMessage('Description is too long'),
]

const validatePlaceBid = [
    body('bidAmount')
    .isFloat({ min: 0.01, max: 9999999.99 })
    .withMessage('Bid amount must be between 0.01 and 9999999.99'),
]

module.exports = { validateUserLogin, validateUserRegister, validateCreateListing, validatePlaceBid };