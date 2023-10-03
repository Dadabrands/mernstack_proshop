import express from "express";
// import products from "../data/products.js";
import dotenv from "dotenv";
dotenv.config();
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
//const express = require("express");
const port = process.env.PORT || 5000;
import productRoutes from "./routes/productRoutes.js";

connectDB(); //Connect to MongoDB
const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
