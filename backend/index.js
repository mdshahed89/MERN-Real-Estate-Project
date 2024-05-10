import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser";
import listRouter from "./routes/listing.route.js"
import cors from "cors"


dotenv.config()
const app = express();

app.use(cors({ credentials: true, origin: "https://extraordinary-crisp-f864c9.netlify.app" }))
app.use(express.json())
app.use(cookieParser())


mongoose.connect("mongodb+srv://RealEstate:RealEstate@realestate.n8dpbzv.mongodb.net/MernEstate?retryWrites=true&w=majority&appName=RealEstate").then(()=>{
    console.log("Database connected seccessfully");
}).catch((err)=>{
    console.log(err);
})

app.listen(4000, ()=>{
    console.log(`Server is running on port  ${process.env.PORT || 4000}`);
})

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)
app.use("/api/listing", listRouter)


app.use((err, req, res, next)=>{
    const message = err.message || "Internal Server error"
    const statusCode = err.statusCode || 500

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})