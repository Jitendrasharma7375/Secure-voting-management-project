import express from "express";
import { Admin } from "../models/Admin.js";
import jwt from 'jsonwebtoken';
const router = express.Router();

router.post('/signin', async (req, res) => {
    try {
        const { Voter_ID, password } = req.body;
        let admin = await Admin.findOne({ Voter_ID });

        if (!admin) {
            // If no admin account exists, create one
            admin = new Admin({
                Voter_ID: Voter_ID,
                password: password
            });
            await admin.save();
            console.log('Admin account created');
        }

        const comparePassword = await compare(password, admin.password);
        if (comparePassword) {
            const token = jwt.sign({ Voter_ID: admin.Voter_ID }, process.env.Admin_Key);
            res.cookie('token', token, { httpOnly: true });
            res.status(200).json({ message: 'Admin signed in' });
        } else {
            res.status(400).json({ message: 'Invalid username or password' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});



const verifyAdmin = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Invalid Admin" });
    } else {
        jwt.verify(token, process.env.Admin_Key, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: "Invalid Token" });
            } else {
                req.Voter_ID = decoded.Voter_ID;
                next();
            }
        });
    }
};

router.get('/signout', (req, res) => {
    res.clearCookie('token');
    res.json({ logout: true });
});

export { router as AdminRouter, verifyAdmin };
