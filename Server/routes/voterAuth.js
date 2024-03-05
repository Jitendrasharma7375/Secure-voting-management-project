import express from "express";
import { VoterSignin } from "../models/VoterSignin.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

const router = express.Router();

function createSecretToken(id) {
    console.log(id);
    return jwt.sign({ id }, process.env.TOKEN_KEY, {
        expiresIn: "1h"
    });
}

router.post('/signin', async (req, res) => {
    try {
        const { Voter_ID, password } = req.body;
        const user = await VoterSignin.findOne({ Voter_ID });
        if (user) {
            if (user.password === password) {
                const token = createSecretToken(user.Voter_ID);
                console.log(token);
                res.status(201).json({ message: "Login Success", success: true, jwttoken: token });
            } else {
                res.json({ message: "Wrong Password" });
            }
        } else {
            res.json({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
    }
});


router.get('/signout', (req, res) => {
    res.clearCookie('token');
    res.json({ logout: true });
});

export { router as VoterRouter };
