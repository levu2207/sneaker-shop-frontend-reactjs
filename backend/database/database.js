const { Sequelize } = require("sequelize");
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

module.exports = {
  sequelize,
  checkConnect,
};
