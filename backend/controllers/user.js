const bcrypt = require("bcrypt");
const User = require("../models/user");

const saltRounds = 15;

exports.signup = async (req, res) => {
    try {
        const { name, email, phoneNo, password } = req.body;
        //console.log("Signup", req.body);

        if (!name || !email || !phoneNo || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ where: { email: email } });
        if (existingUser) {
            //console.log("User already exists:", email); 
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = await User.create({
            name,
            email,
            phoneNo,
            password: hashedPassword
        });
        
        //console.log("New user created:", newUser);
        res.status(200).json({ user: newUser });
    } catch (err) {
        console.error("Error during signup:", err);
        res.status(500).json({ message: "Failed to create a user" });
    }
};
