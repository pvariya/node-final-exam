const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");


const signUp = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const user = await User.findOne({ email: email });
        if (user) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role
        });

        await newUser.save();  

        const token = jwt.sign(
            { id: newUser._id, name: newUser.name, email: newUser.email, role: newUser.role },
            "private-key", 
        );
        res.cookie('token', token, { httpOnly: true, secure: true }); // Ensure the cookie is set with `httpOnly`

        res.status(201).json({ msg: "User Created", token, newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};


const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        const token = jwt.sign(
            { id: user._id, name: user.name, email: user.email, role: user.role },
            "private-key",
        );

    
        res.cookie('token', token, { httpOnly: true, secure: true }); // Ensure the cookie is set with `httpOnly`


        res.status(200).json({ msg: "User logged in", token, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

const logOut = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ msg: "Logged out successfully" });
};

module.exports = { signUp, signIn, logOut };
