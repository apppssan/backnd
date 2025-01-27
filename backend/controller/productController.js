import { Product } from "../model/productModel.js";
import ApiFeatures from "../utils/apiFeatures.js";
import ErrorHandler from "../utils/errorHandler.js";
// admin

export const createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  if (!product) {
    return next(ErrorHandler, "sorry the product cannot be created", 404);
  }
  res.status(201).json({
    success: true,
    message: "Product has been created sucessfully",
    product,
  });
};
export const readAlProduct = async (req, res, next) => {
  const resultPerPage = 5;
  const productCount = await Product.countDocuments();
  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const product = await apiFeature.query;
  if (!product) {
    return next(ErrorHandler, "Product not found", 404);
  }
  res.status(200).json({
    success: true,
    message: "product readed sucessfully",
    product,
    productCount,
  });
};
export const updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(ErrorHandler, "Update failed", 404);
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "product readed sucessfully",
    product,
  });
};

export const deleteProduct = async (req, res, next) => {
  let product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "product cant be found",
    });
  }

  res.status(200).json({
    success: true,
    message: "product deleted sucessfully",
    product,
  });
};

// get product detail

export const productDetail = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(ErrorHandler, "product not found", 404);
  }

  res.status(200).json({
    success: true,
    message: "product readed sucessfully",
    product,
  });
};
