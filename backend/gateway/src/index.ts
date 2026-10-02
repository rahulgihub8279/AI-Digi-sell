import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import proxy from "express-http-proxy";

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    data: "gateway running",
  });
});

app.use("/api/auth", proxy(process.env.AUTH_SERVER_URL as string));

app.listen(port, () => {
  console.log(`server is listening on port  http://localhost:${port}`);
 
});
