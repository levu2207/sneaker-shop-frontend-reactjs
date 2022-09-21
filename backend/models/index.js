const { Sequelize } = require("sequelize");
const { createCategoryModel } = require("./category.model");
const { createProductModel } = require("./product.model");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORDS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

const checkConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Kết nối thành công");
  } catch (error) {
    console.log("Kết nối thất bại");
  }
};

const Product = createProductModel(sequelize);

const Category = createCategoryModel(sequelize);

module.exports = {
  sequelize,
  checkConnect,
  Product,
  Category,
};
