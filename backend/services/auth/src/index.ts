import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import morgan from "morgan";  
import connectDb from "./config/db.js";

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    data: "auth server",
  });
});
 
app.listen(port, () => {
  console.log(`auth service is listening on port  http://localhost:${port}`);
   connectDb()
});
