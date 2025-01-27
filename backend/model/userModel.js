import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    maxLength: [30, "Name cannot be exceed to 30"],
    minLength: [5, "name is should have more than 5 character"],
  },
  email: {
    type: String,
    required: ["please enter your email"],
    unique: true,
    validate: [validator.isEmail, "please enter valid email"],
  },
  password: {
    type: String,
    required: [true, "please enter your  password"],
    minLength: [8, "name is should have more than 8 character"],
    select: false,
  },
  isVerifiedEmal: {
    type: Boolean,
    require: [true, "please verify your email "],
  },
  avtar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});
export const User = mongoose.model("User", userSchema);
