const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;
const router = require("./routers/root.routers");

app.use(express.json());

app.use(router);

app.use(morgan("combined"));

app.use(express.static("client"));

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

// setup sequelize
const { sequelize } = require("./models/index");
sequelize.sync({ alter: true });

// async () => {
// };
console.log("Update database successfully");
