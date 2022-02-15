import mongoose from "mongoose"
import Entry from "../models/entryModel.js"


const getEntries = async (req, res, next) => {
    try {
        const entry = await Entry.find()
        res.status(200).json(entry)
    } catch (error) {
        res.status(404).json({ message: "error.message" })
    }
}

const getEntryById = async (req, res, next) => {
    const { id } = req.params
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({ message: "Id is not valid" })
        }
        const entry = await Entry.findById(id)

        if (!entry) { return }

        res.status(200).json(entry)

    } catch (error) {
        res.status(404).json({ message: "Entry not found" })
    }
}


const postEntry = async (req, res, next) => {
    try {
        const entry = req.body
        const createdEntry = await Entry.create(entry)
        res.status(201).json(createdEntry)
    } catch (error) {
        res.json({ message: "Create Memory Failed" })
    }
}

const putEntry = async (req,res,next) => {
    const { id } = req.params
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({ message: "Id is not valid" })
        }
        const {title,content,creater,image} = req.body
        const updatedEntry = await Entry.findByIdAndUpdate(id,{title,content,creater,image,_id:id}, {new:true})

        res.status(200).json(updatedEntry)

    } catch (error) {
        res.json({ message: "Post cannot be updated" })
    }
}

const deleteEntry = async (req,res,next) => {
    const { id } = req.params
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({ message: "Id is not valid" })
        }
        await Entry.findByIdAndDelete(id)
        res.json({message:"Entry deleted succesfully"})

    } catch (error) {
        res.json({ message: "Post cannot be deleted" })
    }
}




export default { getEntries, getEntryById, postEntry, putEntry, deleteEntry }