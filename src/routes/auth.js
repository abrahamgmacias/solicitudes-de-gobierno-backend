const express = require('express');
const {
    login
} = require('../controllers/auth.js');

const authRouter = express.Router();

authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(401).json({
            message: "Invalid credentials."
        })
    }

    const tokenData = await login(email, password);

    if (!tokenData.loggedIn) {
        return res.status(401).json({
            message: "Invalid credentials."
        });
    }

    return res.status(200).json({
        id: tokenData.id,
        token: tokenData.token,
        first_name: tokenData.first_name,
        role: tokenData.role
    })
});


authRouter.post("/logout", async (req, res) => {

});

module.exports = authRouter;