const User = require("../models/user.model");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;
        let userExists = await User.findOne({ email });
        if(userExists) {
            res.status(401).json({ message: "Email is already in use." });
            return;
        }
        const saltRounds = 10;
        bcrypt.hash(password, saltRounds, async (err, hash) => {
            if(err) throw new Error("Internal server error");
            const user = new User({
                email,
                password: hash
            });

        await user.save();
        res.status(201).json({ message: "User created successfully" });
        });

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

        bcrypt.compare(password, user.password, (err, result) => {
            if(result) {
               return res.status(200).json({ message: "User logged in successfully" });
            }
            console.log(err);
            return res.status(401).json({ message: "Invalid credentials" });
        });
    } catch (err) {
        res.status(401).send( err.message );
    }
}