import express from "express";
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import router from "./routers//indexRouter.js"

dotenv.config()

const app = express()

app.use(express.json({limit: "20mb"}))
app.use(cors())
app.use("/",router)




app.listen(process.env.PORT, ()=> {
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>console.log('Connected to Database'))
    .catch((err)=>console.log(err))
})