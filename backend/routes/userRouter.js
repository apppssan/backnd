import { Router } from "express";
import { registerUser } from "../controller/userController.js";

const userRouter = Router();
userRouter.route("/").post(registerUser);
export default userRouter;
