import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";

const port = process.env.PORT || 5000;
const app = express();

app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: "*",
  }),
);
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    data: "server running",
  });
});
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
