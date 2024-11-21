const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const existedEmail = await User.findOne({ email });
        if (existedEmail) {
            return res.status(400).send({ message: " Email already  exit:" });
        }
        const bcryptedPassword = await bcrypt.hash(password, 10)

        const registerUser = await User.create({ name, email, password: bcryptedPassword,role });
        res.status(201).send({ message: "User registered successfully", registerUser });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

        const token = jwt.sign({ id: user._id, role: user.role }, "secretKey", {
            expiresIn: "10h",
        });

        res.status(200).send({ message: "user logged successfully", token })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { register, login };