import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import './db.js'
import { ElectionRouter } from "./routes/ElectionRoutes.js";
import { AdminRouter } from "./routes/auth.js";

//Routes
const app = express()
app.use(express.json())
app.use(cors(
    {
        origin: ['http://localhost:5173'],
        credentials: true
    }
))

app.use(cookieParser())
dotenv.config()
app.use('/ElectionRoutes', ElectionRouter);
app.use('/auth', AdminRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
