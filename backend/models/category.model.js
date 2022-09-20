const sequelize = require("../database/database");
const { DataTypes } = require("sequelize");

const Category = sequelize.sequelize.define(
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

const syncCategoryModel = async () => {
  await Category.sync({ force: true }); // xóa bảng cũ đi và tạo bảng mới
};

module.exports = {
  Category,
  syncCategoryModel,
};
