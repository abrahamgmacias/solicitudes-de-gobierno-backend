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

    const userData = await login(email, password);
    
    if (!userData.loggedIn) {
        return res.status(401).json({
            message: "Invalid credentials."
        });
    }

    return res.status(200).json({
        id: userData.id,
        token: userData.token,
        role: userData.role,
        first_name: userData.first_name,
        last_name: userData.last_name
    })
});


authRouter.post("/logout", async (req, res) => {

});

module.exports = authRouter;