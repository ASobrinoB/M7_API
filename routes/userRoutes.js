const express = require('express');
const auth = require('../middleware/authorization');
const {addUser, login, verifyToken, getUserById, getUsers, deleteUserById, updateUserById} = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post   ('/login',        login);
userRouter.get    ('/verify-token', auth, verifyToken);
userRouter.post   ('/add-user',     addUser);
userRouter.put    ('/update-user',  updateUserById);
userRouter.delete ('/delete-user',  deleteUserById);
userRouter.get    ('/get-user',     getUserById);
userRouter.get    ('/get-users',    getUsers);

module.exports = userRouter;