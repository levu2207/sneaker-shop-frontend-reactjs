const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;
const router = require("./routers/index");
const sequelize = require("./database/database");
const productModel = require("./models/product.model");
const categoryModel = require("./models/category.model");

app.use(express.json());

app.use(router);

app.use(morgan("combined"));

app.use(express.static("client"));

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

// check connect database
sequelize.checkConnect();

// sync product model
// productModel.syncProductModel();

// // sync product model

// categoryModel.syncCategoryModel();
