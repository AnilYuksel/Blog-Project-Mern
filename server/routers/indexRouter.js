import express, { Router } from "express";
const router = express.Router()
import entryRouter from "./entryRouter.js";
import userRouter from  "./userRouter.js"

router.use("/",entryRouter)
router.use("/",userRouter)

export default router