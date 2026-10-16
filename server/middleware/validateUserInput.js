const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(express.json());

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
    .isLength({ min: 1, max: 30 })
    .withMessage('Username must be at least 1 character long and 30 characters long'),

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
    
]

const validatePlaceBid = [
    
]

//export all