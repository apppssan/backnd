import { User } from "../model/userModel.js";

export const registration = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
      avtar: {
        public_id: "this is sample id",
        url: "profileurl",
      },
    });
    res.status(200).json({
      success: true,
      message: "user has been created sucessfully",
      user,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "account registration failed",
    });
  }
};
