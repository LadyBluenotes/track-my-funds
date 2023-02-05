const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;
        let userExists = await User.findOne({ email });
        if(userExists) {
            res.status(401).json({ message: "Email is already in use." });
            return;
        }
        const saltRounds = 10;
        const result = bcrypt.hash(password, saltRounds, async (err, hash) => {
            if(err) throw new Error("Internal server error");
            const user = new User({
                email,
                password: hash
            });
        if(result){
            await user.save();
            res.status(201).json({ message: "User created successfully" });
            };
        })
        

    } catch (err) {
        res.status(401).send( err.message );
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }
        const isPassword = bcrypt.compare(password, user.password);
        if(!isPassword) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }

        const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "24h" });
        res.status(200).json({ token });
    } catch (err) {
        res.status(401).send( err.message );
    }
}