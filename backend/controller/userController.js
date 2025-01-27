import bcrypt from "bcryptjs"
import { User } from "../model/userModel.js"
import jwt from "jsonwebtoken"
import { secretKey } from "../utils/constant.js"
import { sendEmail } from "../nodemialer/sendMail.js"
export const registerUser= async(req,res,next)=>{
  try {
    let data=req.body
    let hashedPassword=await bcrypt.hash( data.password,10)
    // console.log(hashedPassword);
    
    data={
      ...data,
      isVerifiedEmail:false,
      password:hashedPassword
    }
    // console.log(data);
    
    let result =await User.create(data)
    // let generate the 
    let infoObj={
      _id:result._id
    }
    let expiryInfo={
      expiresIn:"1d"
    }
    let token =await jwt.sign(infoObj,secretKey,expiryInfo)
    // console.log(token);
    
    // let send mail to the user 
    await sendEmail({
      to:data.email,
      subject:"Account registration",
      html:`<h1>Your account has been created successfully</h1>
      <a href="http://localhost:5173/verify-email?token=${token}">

      http://localhost:5173/verify-email?token=${token}</a>
      `,
    })
    res.status(201).json({
      success:true,
      message:"A link has been send to your email",
      result:result
    })
  } catch (error) {
    res.status(400).json({
      success:false,
      message:error.message
    })
  }
}