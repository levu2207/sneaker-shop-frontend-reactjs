const { DataTypes } = require("sequelize");
const { Category } = require("./category.model");

const createProductModel = (sequelize) => {
  return sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      brand: {
        type: DataTypes.STRING,
        allowNull: false,
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
        type: DataTypes.STRING,
        allowNull: false,
      },

      sale: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      category_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "products",
      timestamps: true,
    }
  );
};

module.exports = {
  createProductModel,
};
