
import databaseConnection from './database/connection.js'
import userRouter from './modules/user/user.controller.js'
import blogRoutes from './modules/blogs/blog.controller.js'
export const bootstrap = (app, express) => {

    app.use(express.json())
    databaseConnection()
    console.log("im in auth branch ");
    console.log("im in auth branch ");

    console.log("im in mater branch");
    console.log("im in testt");

    app.use('/api/v1/users', userRouter)
    app.use("/api/v1/blogs", blogRoutes)

    app.listen(3000, () => {
        console.log("server is running on port 3000");
    })
}