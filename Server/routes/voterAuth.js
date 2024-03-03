import express from "express";
import { VoterSignin } from "../models/VoterSignin.js";

const router = express.Router();

router.post('/signin', async (req, res) => {
    try {
        const { Voter_ID, password } = req.body;
        const user = await VoterSignin.findOne({ Voter_ID });
        if (user) {
            if (user.password === password) {
                res.json({ message: "Login Success" });
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