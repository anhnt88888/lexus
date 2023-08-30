import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRouter from "./routes/product";
import authRouter from "./routes/auth";
import cors from "cors";
import categoryRouter from "./routes/category";

// config
dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// router
app.use("/api", productRouter);
app.use("/api", authRouter);
app.use("/api", categoryRouter);

// connect to db
mongoose.connect("mongodb://127.0.0.1:27017/we17309");

export const viteNodeApp = app;
