import express, { Router } from "express";
const router = express.Router()
import entryRouter from "./entryRouter.js";

router.use("/",entryRouter)

export default router