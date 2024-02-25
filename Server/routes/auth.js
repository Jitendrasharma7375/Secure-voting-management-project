import express from "express";
import { Admin } from "../models/Admin.js";
import { Voter } from "../models/Voter.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router()

router.post('/signin', async (req, res) => {
    try {
        const { username, password } = req.body
        const admin = await Admin.findOne({ username })
        if (admin) {
            const comparePassword = await bcrypt.compare(password, admin.password)
            if (comparePassword) {
                res.cookie('admin', admin._id, {
                    httpOnly: true
                })
                res.status(200).json({ message: 'Admin signed in' })
            } else {
                res.status(400).json({ message: 'Invalid username or password' })
            }
        } else {
            res.status(400).json({ message: 'Invalid username or password' })
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' })
    }
})

const verifyAdmin = (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        return res.json({ message: "Invalid Admin" })
    } else {
        jwt.verify(token, process.env.Admin_Key, (err, decoded) => {
            if (err) {
                return res.json({ message: "Invalid Token" })
            } else {
                req.username = decoded.username;
                req.role = decoded.role;
                next()
            }
        })
    }
}

export { router as AdminRouter, verifyAdmin }

