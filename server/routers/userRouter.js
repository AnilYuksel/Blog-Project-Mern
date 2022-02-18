import express from "express";
const router = express.Router()
import userController from "../controllers/userController.js"

router.post("/signup",userController.signUp)
router.get("/logout/:id",userController.logOut)
router.post("/signin",userController.signIn)
// router.get("/refresh/:id",userController.refreshToken)

export default router