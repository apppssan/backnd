import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter product name "],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "enter the product description"],
  },
  price: {
    type: Number,
    required: [true, "please enter the product price"],
    maxLength: [8, "price cannot exceed to 8 character"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "please enter the product category"],
  },
  stock: {
    type: Number,
    required: [true, "please enter product stock"],
    maxLength: [4, "stock cannot be exceed 4 character"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export const Product = mongoose.model("Product", productSchema);
