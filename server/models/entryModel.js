import mongoose from "mongoose";

const entrySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    creator:{
        type: String,
        required: true
    },
    image:{
        type:String
    },
    date:{
        type:Date,
        default: new Date()
    }
})

const Entry = mongoose.model('entry',entrySchema)

export default Entry