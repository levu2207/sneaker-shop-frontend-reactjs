const express = require("express");
const productController = require("../controllers/product.controller");
const productRouter = express.Router();

const { logFeature } = require("../middlewares/logger/log-feature");
const { checkEmty } = require("../middlewares/validations/product.validation");

productRouter.get("/", productController.getProductList);

productRouter.get("/:id", productController.getProductDetailsById);

productRouter.post("/", productController.createProduct);

productRouter.put("/:id", productController.updateProduct);

productRouter.delete("/:id", productController.deleteProduct);

// productRouter.get("/category", Products.category);

// productRouter.get("/category", Products.category);

// productRouter.get("/category/pagination", Products.pagination);

// productRouter.get("/scoll/page", Products.scoll);

module.exports = productRouter;
