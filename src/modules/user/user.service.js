import { userModel } from '../../database/models/user.mode.js'





export const getAllUsers = async (req, res) => {
    let userData = await userModel.find()
    if (userData.length > 0) {
        return res.json({ message: "user data ", userData })
    }
    return res.status(404).json({ message: "user data not found" })
}


export const addUser = async (req, res) => {
    let { name, email, password, phone } = req.body
    let addedUser = await userModel.insertMany({ name, email, password, phone })
    if (addedUser) {
        return res.json({ message: "user added", addedUser })
    }
    res.json({ message: "user not added" })
}

export const login = async (req, res) => {
    let { email, password } = req.body
    let exsistUser = await userModel.findOne({ email, password })
    if (exsistUser) {
        return res.json("user login successfully")
    }
    res.json("email or password incorrect")
}

export const updateUser = async (req, res) => {
    let { userId } = req.query
    let { name, password, phone } = req.body
    let exsistUser = await userModel.findById(userId)
    if (exsistUser) {
        exsistUser.name = name ? name : exsistUser.name
        exsistUser.password = password ? password : exsistUser.password
        exsistUser.phone = phone ? phone : exsistUser.phone
        exsistUser.save()
        return res.json({ message: "user update succesfully", data: exsistUser })
    }
    res.json("user not found ")
}

export const deleteUser = async (req, res) => {
    let { userId } = req.params
    let deleteUser = await userModel.findByIdAndDelete(userId)
    if (deleteUser) {
        return res.json("user deleted ")
    }
    res.json("user not found")
}