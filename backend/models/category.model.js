const { DataTypes } = require("sequelize");

const createCategoryModel = (sequelize) => {
  return sequelize.define(
    "Category",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      category_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "category",
      timestamps: true,
    }
  );
};

module.exports = {
  createCategoryModel,
};
