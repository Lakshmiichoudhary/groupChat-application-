const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const saltRounds = 15;

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_TOKEN, { expiresIn: '1h' });
}

exports.signupUser = async (req, res) => {
    try {
        const { name, email, phoneNo, password } = req.body;

        if (!name || !email || !phoneNo || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = await User.create({
            name,
            email,
            phoneNo,
            password: hashedPassword
        });

        const token = generateToken(newUser.id);
        //console.log("user created" ,token)
        res.status(201).json({ message: "User created", token });
    } catch (err) {
        console.error("Error during signup:", err);
        res.status(500).json({ message: "Failed to create a user" });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: "Invalid email" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "wrong password" });
        }

        const token = generateToken(user.id);
        //console.log("Login successful, token:", token);
        return res.status(200).json({ message: "Login successful", token });
    } catch (err) {
        console.error("Error during login:", err);
        res.status(404).json({ message: "User not found" });
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};