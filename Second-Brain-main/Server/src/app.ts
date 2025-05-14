import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import router from "./routes/pageRoutes";
import dbConnect from "./config/db";
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true 
}));
app.use(cookieParser());

dbConnect(); // now runs with env vars already loaded

app.use("/api/v1", router);

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
console.log("Connecting to:", process.env.DBurl);
