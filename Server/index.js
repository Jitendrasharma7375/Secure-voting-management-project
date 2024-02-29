import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import './db.js'
import { AdminRouter } from "./routes/auth.js";
import { CandidateRouter } from "./routes/candidate.js";

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
app.use('/auth', AdminRouter)
app.use('/candidate', CandidateRouter)


const PORT = process.env.PORT || 3000; // Fallback to port 3000 if process.env.PORT is not defined

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



