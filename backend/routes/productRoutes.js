import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  productDetail,
  readAlProduct,
  updateProduct,
} from "../controller/productController.js";

const productRouter = Router();
productRouter.route("/").post(createProduct);
productRouter.route("/").get(readAlProduct);
productRouter
  .route("/:id")
  .patch(updateProduct)
  .delete(deleteProduct)
  .get(productDetail);

export default productRouter;
