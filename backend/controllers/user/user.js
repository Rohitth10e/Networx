import { hashPassword, verifyPassword } from "../../utils/bcrypt.js";
import { generateToken, verifyToken } from '../../utils/jwt.js';
import User from "../../models/User.js";
import Profile from "../../models/Profile.js";

export const register = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;

        if (!name || !username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const hashedPass = await hashPassword(password);

        const findUser = await User.findOne({ email })

        if (findUser.length) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = await new User({
            name,
            username,
            email,
            password: hashedPass
        })
        Profile.create({ user: user._id });
        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const isMatch = await verifyPassword(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = generateToken({ id: user._id, email: user.email });

        res.status(200).json({
            message: "Login successful",
            userId: user._id,
            token,
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}