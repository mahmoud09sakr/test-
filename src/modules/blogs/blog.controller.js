import { Router } from "express";
import { blogModel } from "../../database/models/blog.model.js";
import { addBlog, getAllVlogsWithUsers } from './blog.service.js'

const router = Router()


router.post('/add-blog', addBlog)
router.get('/get-all-blogs-with-users',getAllVlogsWithUsers)


export default router