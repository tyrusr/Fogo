//import validator from middleware
//import sanatizer from middleware
//import methods from model?
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { generateAccessToken, generateRefreshToken } = require('../utils/generateToken');
//import error middleware from middleware

//create jwt

//create csrf

//refresh jwt once timed out

// in production we need to add secure: true to all the res.cookie stuff/////////////////////////////////////////////////////////////////////////////////

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    try{
        //email or username if we want
        /*
        const existingUser = await User.findOne({
        $or: [
            { email: email },
            { username: username }
        ]
        });
        */
        const existingUser = await User.findOne({ email });//this might be invalid and we need to pass as an object
        console.log(existingUser);
        if (!existingUser) {
            return res.status(400).json({ error: "Invalid email or password"});
        } else {
            const isMatch = await existingUser.comparePassword(password);
            if (!isMatch) {
                return res.status(400).json({ error: "Invalid email or password" });
            }

            const accessToken = generateAccessToken(existingUser);
            const refreshToken = generateRefreshToken(existingUser);

            res.cookie('accessToken', accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 1000 * 60 * 60 // 1 hour
            });

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 1000 * 60 * 60 * 24 * 7 //7 days
            });

            return res.status(200).json({ message: "Login successful", username: existingUser.username });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
    }
}

//handle logout
    //delete the jwt to prevent stealing or do i just leave it as a cookie
    //not sure what else

const logoutUser = async (req, res) => {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
        return res.status(401).json({ message: 'Access denied'});
    }

    try {
        const decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET);

        const existingUser = await User.findOne({ _id: decodedToken.id });

        if (!existingUser) {
            return res.status(404).json({ error: 'User not found'});
        }

        res.clearCookie('accessToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });
        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });

        return res.status(200).json({ message: 'Logout successful'})

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
    }
}



const registerUser = async (req, res) => {

    const { username, email, password, password2 } = req.body;

    try{
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email aready in use"});
        } else if (!existingUser) {
            const existingUserName = await User.findOne({ username });
            if (existingUserName) {
                return res.status(400).json({ error: "Username already taken"});
            }
        }

        

        if (password !== password2) {
            return res.status(400).json({ error: "Passwords do not match"});
        }

        const userItem = new User({ username, email, password });
        await userItem.save();

        const accessToken = generateAccessToken(userItem);
        const refreshToken = generateRefreshToken(userItem);

        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60 // 1 hour
        });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60 * 24 * 7 //7 days
        });

        return res.status(201).json({ message: "User created successfully", username:userItem.username });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
    }
}

module.exports = { loginUser, registerUser, logoutUser };