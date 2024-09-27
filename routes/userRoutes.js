const express = require('express');
const auth = require('../middleware/authorization');
const {login, verifyToken, addUser, updateUserById, deleteUserById, getUserById, getUsers, } = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post   ('/login',        login);
userRouter.get    ('/verify-token', auth, verifyToken);
userRouter.post   ('/add-user',     addUser);
userRouter.put    ('/update-user',  updateUserById);
userRouter.delete ('/delete-user',  deleteUserById);
userRouter.get    ('/get-user',     getUserById);
userRouter.get    ('/get-users',    getUsers);

module.exports = userRouter;