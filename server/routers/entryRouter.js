import express from "express";
const router = express.Router()
import entryController from "../controllers/entryController.js"
// import authMiddleWare from "../middleware/authmiddleware.js"

router.get("/entry" ,entryController.getEntries)
router.get("/entry/:id",entryController.getEntryById)
router.post("/entry",  entryController.postEntry)
router.put("/entry/:id",  entryController.putEntry)
router.delete("/entry/:id",  entryController.deleteEntry)

export default router
