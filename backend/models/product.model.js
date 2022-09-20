const sequelize = require("../database/database");
const { DataTypes } = require("sequelize");
const { Category } = require("./category.model");

const Product = sequelize.sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
    },

    image1: {
      type: DataTypes.STRING(500),
    },
    image2: {
      type: DataTypes.STRING(500),
    },
    image3: {
      type: DataTypes.STRING(500),
    },
    image4: {
      type: DataTypes.STRING(500),
    },

    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    sale: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    category_id: {
      type: DataTypes.INTEGER,

      reference: {
        model: Category,
        key: "id",
      },
    },
  },
  {
    tableName: "products",
    timestamps: true,
  }
);

const syncProductModel = async () => {
  await Product.sync({ force: true }); // xóa bảng cũ đi và tạo bảng mới
  // await Product.sync({ alter: true }); // sửa bảng cũ thành bảng mới
};

module.exports = {
  Product,
  syncProductModel,
};
