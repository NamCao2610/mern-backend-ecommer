import express from 'express';
import User from '../models/userModel.js';
import data from '../data.js';
import expressAsyncHandler from 'express-async-handler';

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    await User.remove({});
    const createdUser = await User.insertMany(data.users);
    res.send({ createdUser });
}))

export default userRouter;