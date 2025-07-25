import { blogModel } from "../../database/models/blog.model.js";



export const addBlog = async (req, res) => {
    let { title, desc, userId } = req.body
    let addedBlog = await blogModel.insertMany({ title, desc, userId })
    if (addedBlog) {
        return res.json("blog added successfully")
    }
    res.json("blog not added ")
}

export const getAllVlogsWithUsers = async (req, res) => {
    let blogsData = await blogModel.find().populate("userId")
    if (blogsData) {
        res.json(blogsData)
    } else {
        res.json("blogs not found ")
    }
}