import express from "express";
const router = express.Router();

import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

// import asyncHandler from "../middleware/asyncHandler.js";
// import Product from "../models/productModel.js";
// import products from "../data/products.js";

// const asyncHandler = require("../middleware/asyncHandler");
// const Product = require("../models/productModel");

// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({});
//     // throw new Error("Resource not found");
//     res.json(products);
//   })
// );

// router.get(
//   "/:id",
//   asyncHandler(async (req, res) => {
//     // const product = products.find((p) => p._id === req.params.id);
//     const product = await Product.findById(req.params.id);
//     if (product) {
//       res.json(product);
//     } else {
//       res.status(404);
//       throw new Error("Resource not found");
//     }
//   })
// );
router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;