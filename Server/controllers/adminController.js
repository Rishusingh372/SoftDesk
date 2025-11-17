const adminModel = require("../models/adminModel");

const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    try {
        const admin = await adminModel.findOne({ email: email, password: password });
        if (admin) {
            res.status(200).json({ message: "Login Successful", admin: admin });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        res.status(500).send({ msg: "Error in Admin Login", error: error.message });
    }
};

module.exports = {
    adminLogin
};