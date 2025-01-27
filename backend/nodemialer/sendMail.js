import nodemailer from "nodemailer";
const transpoterInfo = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "apsanneupane345@gmail.com",
    pass: "urtn jiwf idrv fzgq",
  },
};
export let sendEmail = async (mailInfo) => {
  try {
    let transpoter = nodemailer.createTransport(transpoterInfo);
    let info = await transpoter.sendMail(mailInfo);
  } catch (error) {
    console.log(error.message, "error has occur");
  }
};
