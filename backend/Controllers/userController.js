const User = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {

    const { name, email, password } = req.body;
    const fileName = req.file?.originalname;
    try {
        const newUser = new User({ name, email, password: await bcrypt.hash(password, 10), image: fileName });
        const insertUser = await newUser.save();
        res.status(201).json({ message: 'User Created Successfully', data: insertUser, success: true });
    } catch (err) {
        res.status(500).json({ error: "Check the value", success: false });
    }

};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const getUser = await User.findOne({ email: email });
    if (!getUser) {
        res.status(404).json({ message: 'User not found' });
    }
    try {
        const checkPassword = await bcrypt.compare(password, getUser.password);
        const token = jwt.sign({ name: getUser.name }, process.env.SECRET, { expiresIn: 86400 });
        if (checkPassword) {
            res.status(200).json({ message: 'Login Successful', name: getUser.name, token: token, success: true });
        } else {
            res.status(401).json({ message: 'Invalid Password!', success: false, error: 'Invalid Password' });
        }
    }
    catch (err) {
        res.status(500).json({ error: "Check the value", success: false });
    };
}

const userList = async (req, res) => {
    const getUsers = await User.find();
    try {
        res.status(200).json({ data: getUsers, message: "Show list", success: true });
    } catch (err) {
        res.status(500).json({ error: "Check the value", success: false, message: "Login successfully" });
    }

}

module.exports = { registerUser, loginUser, userList };