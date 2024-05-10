// User Routes
const express = require('express')
const userRouter = express.Router()

const {
  registerUser,
  updateUser,
  loginUser,
  allUsers
} = require('../Controllers/userController')
const verifyUser = require('../Middlewares/verifyUser')

userRouter.post('/userregister', registerUser)
userRouter.post('/user-login', loginUser)
userRouter.put('/user-update/:id', verifyUser, updateUser)
userRouter.get ('/allusers', allUsers)

module.exports = userRouter
