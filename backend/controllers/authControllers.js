//import validator from middleware
//import sanatizer from middleware
//import methods from model?
const User = require('../models/User');
const { generateAccessToken, generateRefreshToken } = require('../utils/generateToken');
//import error middleware from middleware

//create jwt

//create csrf

//refresh jwt once timed out

// in production we need to add secure: true to all the res.cookie stuff/////////////////////////////////////////////////////////////////////////////////

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    try{
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ error: "Invalid email or password"});
        } else {
            //check password matches and if then gen token

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
        }

        //check if password matches with the model method with bycript

        //create tokens

        //const userItem = new User({ email, password });
        //await userItem.save();

        //res.status(201).json({ message: "Login successful"});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
}

//handle login async
    //get users input
    //validate users input from validateUserInput
    //try
        //make sure user exists in db
        //get method form model to conmpare the users input to the hashed password in db
        // if everything is good then
            //sign in user 
            // issue a jwt
            //make csrf token?
            //redirect to home page
        //shoudl i make a conditional for each thing that can go wrong or just leave the catch to handle that
    //catch 
        //call error from middleware

//handle logout
    //delete the jwt to prevent stealing or do i just leave it as a cookie
    //not sure what else

//handle register new user
    //get users input
    //validate users input from validateUserInput
    //try
        //check if username already exists
        //check if email is already used
        //if everything is good then
            //create new user
            //issue a jwt
            //make csrf?
            //redirect to home page
        //shoudl i make a conditional for each thing that can go wrong or just leave the catch to handle that
    //catch 
        //call error from middleware

const registerUser = async (req, res) => {

    const { username, email, password, password2 } = req.body;
    console.log(username, email, password, password2);

    try{
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email aready in use"});
        }

        if (password !== password2) {
            return res.status(400).json({ message: "Passwords do not match"});
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

        res.status(201).json({ message: "User created successfully"});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
}

module.exports = { loginUser, registerUser };
//export all