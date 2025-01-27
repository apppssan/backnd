import { Router } from "express";
import { registration } from "../controller/userController.js";

const userRouter = Router();
userRouter.route("/").post(registration);
export default userRouter;
