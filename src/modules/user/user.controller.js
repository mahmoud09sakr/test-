import { Router } from "express";
const router = Router()
import { addUser, deleteUser, getAllUsers, login, updateUser } from './user.service.js'


router.get('/get-all-users', getAllUsers)
router.post('/register', addUser)
router.post('/login', login)
router.put('/update-user', updateUser)

router.delete('/delete-user/:userId',deleteUser)

//   update delete 

export default router