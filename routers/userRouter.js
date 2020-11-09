import express from "express";
import { changePassword, editProfile, userDetail } from "../controller/userController";
import { onlyPrivate } from "../middlewares";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;

/*
M data
V how does the data look
C function that looks for the data
*/