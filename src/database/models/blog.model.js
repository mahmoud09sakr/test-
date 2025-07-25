import mongoose from "mongoose";
import { type } from "os";


const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    }
})


export const blogModel = mongoose.model("blog", blogSchema)