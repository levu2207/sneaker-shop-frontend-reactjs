const express = require("express");
const productRouter = express.Router();

const productController = require("../controllers/product.controller");
const { logFeature } = require("../middlewares/logger/log-feature");
const { checkEmty } = require("../middlewares/validations/product.validation");

productRouter.get("/", logFeature, productController.getProductList);

productRouter.get("/:id", productController.getProductDetailsById);

productRouter.post("/", checkEmty, productController.createProduct);

productRouter.put("/:id", productController.updateProduct);

productRouter.delete("/:id", productController.deleteProduct);

// productRouter.get("/category", Products.category);

// productRouter.get("/category", Products.category);

// productRouter.get("/category/pagination", Products.pagination);

// productRouter.get("/scoll/page", Products.scoll);

module.exports = productRouter;
