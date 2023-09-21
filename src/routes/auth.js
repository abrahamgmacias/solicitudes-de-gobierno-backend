import express from 'express';
import {
    login
} from '../controllers/auth';

const router = express.Router();

router.post("/login", async (req, res) => {
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
        role: tokenData.role,
        privileges: tokenData.privileges
    })
});

