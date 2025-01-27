import express, { json } from "express";
import productRouter from "./routes/productRoutes.js";
import { errorMiddleware } from "./middleware/error.js";
import userRouter from "./routes/userRouter.js";
const app = express();
app.use(json());

app.use("/product", productRouter);
app.use("/user", userRouter);
// middle ware for error
app.use(errorMiddleware);

export default app;
