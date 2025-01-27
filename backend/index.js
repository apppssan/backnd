import dotenv from "dotenv";
import connectDB from "./database/database.js";
import app from "./app.js";
import { port } from "./utils/constant.js";
dotenv.config();

// handle caught expection
process.on("uncaughtException", (err) => {
  console.error(`Error:${err.message}`);
  console.error("Shutting down the server due to unchaught expeection");
  process.exit(1);
});
connectDB();

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "server is running fluently" });
});

// starting the server

const server = app.listen(port, () => {
  console.log(`server is running on the http://localhost:${port}`);
});

// handle and unhandle promise rejection

process.on("unhandledRejection", (err) => {
  console.error(`Error:${err.message}`);
  console.error("Shutting down the server due to unhandle promise rejection");
  server.close(() => {
    process.exit(1);
  });
});

// gracefu; shutdown on STGTERM

process.on("SIGTERM", async (err) => {
  console.log("SIGTREM recived closing the server");
  try {
    await mongoose.connection.close();
    console.log("database conection is failed due to SIGTREM");
  } catch (error) {
    console.error(`error closing data base ${err.message}`);
  }
  server.close(() => {
    process.exit(0);
  });
});
