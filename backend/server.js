const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;
const router = require("./routers/index");
const db = require("./db/database");

app.use(express.json());

app.use(router);

app.use(morgan("combined"));

app.use(express.static("client"));

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

// db.connectDB();
